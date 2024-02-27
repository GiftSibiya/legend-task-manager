import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";

function Signup() {
  const history = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();
    try {
      await axios.post("http://localhost:4000/register", {
        email,
        password,
      });
    } catch (error) {
      console.log(e);
    }
  }

  return (
    <>
      <div className="login--con">
        <div className="login--box">
          {/* TOP TEXT BOX */}

          <div className="login--text">
            <div className="login--text__h">Login</div>
            <div className="login--text__p">
              Enter your email to login to your account
            </div>
          </div>

          {/* -- */}

          {/* INPUT FIELDS */}

          <form action="POST">
            <input
              type="email"
              className="login--input__email"
              placeholder="m@example.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></input>
            <input
              type="password"
              className="login--input__email"
              placeholder="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            ></input>
            <input type="submit" onClick={submit} />
          </form>
          <br />
          <p>OR</p>
          <br />
          <Link to={"/"}>Login Page</Link>
          {/* BUTTONS */}
        </div>
      </div>
    </>
  );
}

export default Signup;
