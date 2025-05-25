import React, { useState } from "react";
import "./main.css";
import Item from "./Item";

export default function MainComponent() {
  const [taskName, setTaskName] = useState("");
  const [taskList, setTaskList] = useState([]);

  const list = taskList.map((eachItem) => {
    return <Item title={eachItem} />;
  });

  function addTasks() {
    setTaskList((prevState) => {
      return [...prevState, taskName];
    });
    setTaskName("");
  }

  return (
    <main className="body">

      <div className="lista">

        <span classname="lista-title"> Lista </span>

        <div className="lista-card">

          <input type="text" value={taskName} className="lista-input" onChange={(e)=>setTaskName(e.target.value)}/>
          <button type="button" className="lista-button" onClick={()=>addTasks()}>Adicionar</button>

        </div>

      </div>

      <div className="items">{list}</div>
      
    </main>
  );
}
