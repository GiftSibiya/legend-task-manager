import React from "react";
import "./Task.css";

function Task({ task }) {
  return (
    <div className="Task--text">
      <p className="table-s">{task.taskName}</p>
      <p className="table-l">{task.taskDesc}</p>
      <p className="table-s">{task.taskStatus}</p>
      <p className="table-s">{new Date(task.taskDue).toLocaleDateString()}</p>
      <button className="table-btn"> </button>
    </div>
  );
}

export default Task;
