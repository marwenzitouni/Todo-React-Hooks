import React, { useState } from "react";
import AddTask from "./Component/AddTask/AddTask";
import "./App.css";
import TaskList from "./Component/TaskList/TaskList";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [taskList, setTaskList] = useState([]);
  const doneTask = (id) => {
    setTaskList(
      taskList.map((el) => (el.id === id ? { ...el, isDone: !el.isDone } : el))
    );
  };
  const deletTask = (id) => {
    setTaskList(
      taskList.filter((el) => (el.id !== id ))
    );
  };
  const addTask = (x) => {
    setTaskList([...taskList, { description: x, isDone: false, id: uuidv4() }]);
  };

  return (
    <div className="app">
      <AddTask addTask={addTask} />
      <TaskList tasklist={taskList} doneTask={doneTask} deletTask={deletTask} />
    </div>
  );
}

export default App;
