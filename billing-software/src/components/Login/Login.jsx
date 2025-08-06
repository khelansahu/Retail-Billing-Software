import React, { useState } from "react";
import "./Login.css";
import { adminLogin } from "../../Service/AdminService";
import toast from "./../../../node_modules/react-hot-toast/src/index";

const Login = ({ onLoginSuccess }) => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(userId);
    console.log(password);
    const admin = {
      email: userId,
      password: password,
    };
    try {
      const response = await adminLogin(admin);
      if (response.status === 202) {
        console.log("login succesfull...");
        toast.success("Login succesfully...");
        onLoginSuccess()
      } else {
        console.log("login faild...");
        toast.error("Login failed: Invalid credentials");
        setPassword("");
        setUserId("");
      }
    } catch (error) {
      toast.error("Something went wrong! Try again.");
    }
  };

  return (
    <div className="login-container">
        <h1>Retail Billing Software</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <label htmlFor="user">User ID</label>
        <input
          type="text"
          id="user"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          placeholder="Enter your User ID"
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          required
        />
        <br />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
