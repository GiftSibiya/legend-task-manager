import React, { useState } from "react";
import axios from "axios";
import "./Home.css";
import { useLocation, useNavigate } from "react-router-dom";
import Task from "../../components/task/Task";

function Home() {
  const [taskName, setTaskName] = useState("");
  const [taskDesc, setTaskDesc] = useState("");
  const [taskStatus, setTaskStatus] = useState("");
  const [taskDue, setTaskDue] = useState("");
  const location = useLocation();
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
    <div className="homepage">
      <h1>Hello {location.state.id} and welcome to the home</h1>
      <div className="task--con">
        <div className="task--con__heading">
          <h5>Tasks</h5>
          <button onClick={handleAddTask}>Add Task</button>
        </div>

        {/* NEW TASK */}

        <div className="task--new">
          <form action="Post" className="form--new">
            <div className="task--new__left">
              <div className="new--name">
                <p>Task name</p>
                <input
                  placeholder="Enter Task Name"
                  value={taskName}
                  onChange={(e) => setTaskName(e.target.value)}
                />
                <p>Task Description</p>
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
              <label htmlFor="status">Choose Status:</label>
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
              {/* -- */}

              {/* DUE DATE */}
              <div className="input--date">
                <label htmlFor="dueDate">Choose Due Date:</label>
                <input
                  type="date"
                  id="dueDate"
                  name="dueDate"
                  value={taskDue}
                  onChange={(e) => setTaskDue(e.target.value)}
                />
              </div>
              <input type="submit" onClick={handleAddTask} />

              {/* -- */}
            </div>
            {/* -- */}
          </form>
        </div>

        {/* -- */}
        <div className="task--con__box">
          <div className="task--table">
            <p className="table-sm"> Task Name</p>
            <p className="table-lg">Description</p>
            <p className="table-sm">Status</p>
            <p className="table-sm">Due Date</p>
            <p className="table-sm">Actions</p>
          </div>
          <Task />
        </div>
      </div>
    </div>
  );
}

export default Home;
