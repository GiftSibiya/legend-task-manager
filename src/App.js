// import './App.css'
import Home from "../src/screens/home/Home.jsx";
import Login from "../src/screens/auth/login/Login";
import Signup from "../src/screens/auth/signUp/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import AddTask from "./components/addTask/AddTask.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/add" element={<AddTask />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
