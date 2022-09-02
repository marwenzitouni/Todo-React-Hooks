import React, { useState } from "react";

const AddTask = ({ addTask }) => {
  const [input, setInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.length > 3) {
      addTask(input);
      setInput("");
    }
    else {alert("Need more caracters")}
  };
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div>
        <h3> My Todo List</h3>
        <form onSubmit={handleSubmit}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="add your item"
          />
          <button>Add</button>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
