import React from "react";
import "./main.css";

export default function Item(props){
  return(
    <div className="lista-item">
      <span className="lista-title">{props.title}</span>
    </div>
  );
}