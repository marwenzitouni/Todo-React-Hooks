import React from "react";
import './Task.css'

const Task = ({ el, doneTask, deletTask }) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <h1
        className={el.isDone ? "classDone" : "classunDone"}
        style={{ margin: 0 }}
      >
        {el.description}
      </h1>
      <div>
        <button onClick={() => doneTask(el.id)}>
          {el.isDone ? "Done" : "unDone"}
        </button>
        <button onClick={() => deletTask(el.id)}>Delete</button>
        <button>Edit</button>
      </div>
    </div>
  );
};

export default Task;
