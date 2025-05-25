import React from "react"
import "./main.css"

export default function Card(props){
    return (
      <div className="card">

        <div>
          <img src={props.foto} alt="foto" />
        </div>

        <div className="infos">
          <p>Nome: {props.name}</p>
          <p>Data: {props.dataRepo}</p>

          <p>Biografia: {props.bio}</p>
          <p>Seguindo: {props.seguindo}</p>
          <p>Seguidores: {props.seguidores}</p>
          <p>Localização: {props.localização}</p>

          <p>Nome do Repositório: {props.repo_name}</p>
          <p>Link do Repositório: {props.repo_url}</p>
          <a href={props.repo_url}>Link</a>
        </div>

      </div>
    );
}