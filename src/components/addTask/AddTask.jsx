import axios from "axios";
import "./AddTask.css";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function AddTask() {
  const [taskName, setTaskName] = useState("");
  const [taskDesc, setTaskDesc] = useState("");
  const [taskStatus, setTaskStatus] = useState("");
  const [taskDue, setTaskDue] = useState("");
  const navigate = useNavigate();

  const handleAddTask = async (e) => {
    e.preventDefault();

    try {
      // Send a POST request to your server
      const response = await axios.post("http://localhost:8000/home", {
        taskName,
        taskDesc,
        taskStatus,
        taskDue,
      });

      if (response.status === 200) {
        console.log("Task added successfully");
        alert("Task Added Successfully");
        // Optionally, you can update the UI or perform other actions after adding the task
      } else {
        console.error("Failed to add task");
        alert("Error");
      }
    } catch (error) {
      console.error("Error adding task", error);
      alert("Error");
    }
  };

  return (
    <div className="task--new">
      <form action="Post" className="form--new">
        <div className="task--new__left">
          <div className="new--name">
            <p className="task--p">Task name</p>
            <input
              placeholder="Enter Task Name"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
            />
            <p className="task--p">Task Description</p>
            <textarea
              placeholder="Enter Task Description"
              value={taskDesc}
              onChange={(e) => setTaskDesc(e.target.value)}
            />
          </div>
          {/* Placeholder for task description */}
          <div className="new--Desc"></div>
        </div>

        {/* RIGHT */}
        <div className="task--new__right">
          {/* STATUS */}
          <div className="task--status">
            <p className="task--p">Choose Status</p>
            <select
              id="status"
              name="status"
              value={taskStatus}
              onChange={(e) => setTaskStatus(e.target.value)}
            >
              <option value="In Progress">In Progress</option>
              <option value="Pending">Pending</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
          {/* -- */}
          {/* DUE DATE */}
          <div className="input--date">
            <p>Choose Due Date:</p>
            <input
              type="date"
              id="dueDate"
              name="dueDate"
              value={taskDue}
              onChange={(e) => setTaskDue(e.target.value)}
            />
          </div>
          <input
            type="submit"
            onClick={handleAddTask}
            className="input--submit"
          />

          {/* -- */}
        </div>
        {/* -- */}
      </form>
    </div>
  );
}

export default AddTask;
