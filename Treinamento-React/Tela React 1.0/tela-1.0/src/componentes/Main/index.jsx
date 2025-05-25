import React, {useState} from "react";
import logo from '../Logo/logoserrajr.png'
import "./main.css";

export default function Main(){

     const [logostatus, setlogostatus] = useState(true);
     function mostrar_logo() {
       setlogostatus(!logostatus);
     }     

    return(

        <div className="main">

            {logostatus ? 

            <div  className="card">
                <img className="logo" src={logo} alt='Logo Serra Jr'/>
                <button className="botao" onClick={()=>mostrar_logo()}>Esconder Logo</button>
            </div> :

            <div className="card">
            <img style={{opacity:0}} className="logo" src={logo} alt='Logo Serra Jr'/>
                <button className="botao" onClick={()=>mostrar_logo()}>Mostrar Logo</button>
            </div> }

        </div>
    )
}