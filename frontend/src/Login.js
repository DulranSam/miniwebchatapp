import React, { useState, useEffect } from "react";
//import "./register.module.css";
import Axios from "axios";

export default function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    // Clear error when username or password changes
    setError("");
  }, [username, password]);

  const onLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await Axios.post("http://localhost:8000/home/login", {
        username,
        password,
      });
      props.onAuth({ ...response.data, password });
    } catch (error) {
      setError("Invalid username or password. Please try again.");
      console.log("Login Error:", error.response ? error.response.data : error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="container">
        <form action="#" className="form" onSubmit={onLogin}>
          <h1 style={{ color: "black" }}>Login</h1>
          <div className="input-box">
            <label>Enter Username</label>
            <input
              type="text"
              placeholder="Enter Username"
              required
              name="username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-box">
            <label>Enter Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              required
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <button type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}
