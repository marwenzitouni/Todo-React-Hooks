import React from 'react'
import Task from '../Task/Task';

const TaskList = ({ tasklist, doneTask, deletTask }) => {
  return (
    <div>
      {tasklist.map((el) => (
        <Task key={el.id} el={el} doneTask={doneTask} deletTask={deletTask} />
      ))}
    </div>
  );
};

export default TaskList