import Api from "../Service/Api";
import React, {useState} from "react";
import Card from "../Card/index"
import "./main.css";

export default function Info(){

    const [Nome, setUsername] = useState("");
    const [Repo, setRepo] = useState("");
    const [Lista, setList] = useState([]);
    async function addRepo(){
        try{

            const pegarInfo = await Api.get(`/users/${Nome}`);
            const pegarRepo = await Api.get(`/users/${Nome}/repos`);

            const repoEscolhido = pegarRepo.data.filter(
                (eachrepo)=>{
                    if(eachrepo.name.toLowerCase()===Repo.toLowerCase()){
                        return true;
                    }
                    return false;
                }
            )
            [0];

            const dataFormatada = new Date(repoEscolhido.created_at);
            const dataRepoformatada =`${dataFormatada.getDate()}/${dataFormatada.getMonth()+1}/${dataFormatada.getFullYear()}`;
           
            const estruturaUsuario = {
              foto: pegarInfo.data.avatar_url,
              name: pegarInfo.data.name,
              dataRepo: dataRepoformatada,

              bio: pegarInfo.data.bio,
              seguindo: pegarInfo.data.following,
              seguidores: pegarInfo.data.followers,
              localização: pegarInfo.data.location,

              repo_name: repoEscolhido.name,
              repo_url: repoEscolhido.html_url,
            };
            
            setList((prevState) => [...prevState, estruturaUsuario]);
            
        }catch(error){
            alert("Revise nome de usuário ou repositório")
        }
    }

return(
   <div className="main">
    
    <div className="container">


        <div className="texto">Git Repositórios</div>

        <input type="text" placeholder="Nome do Usuário" value={Nome} className="input" onChange={(e)=>setUsername(e.target.value)}/>

        <input type="text" placeholder="Nome do Repositório" value={Repo} className="input" onChange={(e)=>setRepo(e.target.value)}/>

        <button type="button" className="btn" onClick={()=>addRepo()}>Adicionar</button>
    </div>

    <div>
        {Lista.map((eachitem)=>{
            return (
              <Card
                key={Lista.indexOf(eachitem)}
                foto={eachitem.foto}
                name={eachitem.name}
                dataRepo={eachitem.dataRepo}
                bio={eachitem.bio}
                seguindo={eachitem.seguindo}
                seguidores={eachitem.seguidores}
                localização={eachitem.localização}
                repo_name={eachitem.repo_name}
                repo_url={eachitem.repo_url}
              />
            );
        })}
    </div>

    </div>
)

}