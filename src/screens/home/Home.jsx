import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";
import { useLocation, useNavigate } from "react-router-dom";
import Task from "../../components/task/Task";
import MatTable from "../../components/table/MatTable";

function Home() {
  const [tasks, setTasks] = useState([]);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch tasks from the server when the component mounts
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get("http://localhost:8000/home");
      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  const navigateToAddTask = () => {
    navigate("/add"); // Navigate to the "/add" route
  };

  return (
    <div className="homepage">
      <h1 className="home--h1">
        Hello {location.state.id} and welcome to the Legend Task Manager
      </h1>
      <div className="task--con">
        <div className="task--con__heading">
          <button className="task--con__btn" onClick={navigateToAddTask}>
            Add Task
          </button>
        </div>

        {/* NEW TASK */}

        {/* -- */}
        <div className="task--con__box">
          {/* TASKS */}
          <MatTable tasks={tasks} />

          {/* -- */}
        </div>
      </div>
    </div>
  );
}

export default Home;
