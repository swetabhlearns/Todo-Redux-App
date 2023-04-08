import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../features/UserSlice";
import { Link, useNavigate } from "react-router-dom";
import "./register.css";

const Register = () => {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.users);
  const dispatch = useDispatch();
  const handleAuth = (e) => {
    e.preventDefault();
    dispatch(register({ username: userName, password: password, name: name }));
    navigate("/");
  };
  return (
    <div className="register" onSubmit={handleAuth}>
      <h3>Register your account to access your Todo List</h3>
      <form className="registerForm">
        <input
          type="text"
          placeholder="enter a username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className="loginFormInput"
          required
        />
        <input
          type="password"
          placeholder="enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="loginFormInput"
          required
        />
        <input
          type="text"
          placeholder="enter your full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="loginFormInput"
        />
        <button type="submit">Register</button>
        <p>
          Already a user? <Link to="/">Click Here! </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
