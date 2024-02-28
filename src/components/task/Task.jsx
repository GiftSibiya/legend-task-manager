import React from "react";
import "./Task.css";

function Task({ task }) {
  return (
    <div className="Task--text">
      <p className="table-sm">{task.taskName}</p>
      <p className="table-lg">{task.taskDesc}</p>
      <p className="table-sm">{task.taskStatus}</p>
      <p className="table-sm">{task.taskDue}</p>
      <button> more </button>
    </div>
  );
}

export default Task;
