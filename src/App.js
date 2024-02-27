// App.js

import React from "react";
import Login from "./screens/auth/login/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./screens/auth/signUp/Signup";
import Home from "./screens/home/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/SignUp" element={<Signup />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
