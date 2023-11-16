import React, { useState, useEffect } from "react";
import Axios from "axios";
import Chats from "./Chats";

export default function Login(props) {
  const [username, setUsername] = useState("");
  const [secret, setSecret] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setError("");
  }, [username, secret]);

  const onLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await Axios.post("http://localhost:8000/home/user", {
        username,
        secret,
      });

      props.onAuth({ ...response.data, secret });
      if (response.status !== 200) {
        setError("Invalid username or secret. Please try again.");
      } else {
        return <Chats user={username} secret={secret}></Chats>;
      }

      // Redirect logic should be handled in the parent component or using React Router
    } catch (error) {
      console.log(
        "Login Error:",
        error.response ? error.response.data : error.message
      );
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
              onChange={(e) => setSecret(e.target.value)}
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
