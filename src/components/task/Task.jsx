import React from "react";
import "./Task.css";

function Task({ task }) {
  return (
    <div className="Task--text">
      <p className="table-sm">Task Name: {task.taskName}</p>
      <p className="table-lg">Description: {task.taskDesc}</p>
      <p className="table-sm">Status: {task.taskStatus}</p>
      <p className="table-sm">Due Date: {task.taskDue}</p>
      <p className="table-sm">Actions</p>
    </div>
  );
}

export default Task;
