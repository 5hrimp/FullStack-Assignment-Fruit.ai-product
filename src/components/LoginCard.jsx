import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import '../styles/login.css'

function LoginCard() {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const inputHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (data.username == "dummy" && data.password == "123") {
      window.localStorage.setItem("isLoggedIn","true");
      navigate("/dashboard");
    } else {
      setMessage("Invalid username or password");
    }
  };

  return (
    <div className="container-card">
      <h1 className="heading">Login</h1>
      <form onSubmit={submitHandler}>
        <p className="input-label">Username</p>
        <br />
        <input
          className="input-container"
          type="text"
          name="username"
          value={data.username}
          onChange={inputHandler}
        />
        <br />

        <p className="input-label">Password</p>
        <br />
        <input
          className="input-container"
          type="password"
          name="password"
          value={data.password}
          onChange={inputHandler}
        />
        <br />
        <br/>

        <input type="submit" className="sbmt-btn" value="Login" />
      </form>
      <p className="error-message">{message}</p><br/>
      <div className="login-signup">
        <p className="login-signup-links">
          <NavLink to={'/login'} className={({ isActive }) => (isActive ? "active-link" : "") }>Login</NavLink>
          &nbsp;|&nbsp;  
          <NavLink to={'/signup'} className={({ isActive }) => (isActive ? "active-link" : "") }>Signup</NavLink>
        </p>
      </div>
    </div>
  );
}

export default LoginCard;
