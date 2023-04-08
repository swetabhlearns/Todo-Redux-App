import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../features/UserSlice";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const users = useSelector((state) => state.auth.users);
  const dispatch = useDispatch();
  const handleLogin = (e) => {
    e.preventDefault();
    const payload = users.find(
      (user) => user.username === userName && user.password === password
    );
    if (payload) {
      dispatch(login(payload));
      localStorage.setItem("loginData", payload);
      alert("success!");
      navigate("/todo");
    } else {
      alert("Wrong credentials");
    }
  };
  return (
    <div className="login">
      <h3>You need to Login to access your Todo List</h3>
      <form className="loginForm" onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="enter username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className="loginFormInput"
        />
        <input
          type="password"
          placeholder="enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="loginFormInput"
        />{" "}
        <button type="submit">Login</button>
        <p>
          Not a user? <Link to="/register">Click Here! </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
