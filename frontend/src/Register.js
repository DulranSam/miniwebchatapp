import React, { useEffect, createContext, useRef } from "react";
import { Outlet, Link } from "react-router-dom";
import Axios from "axios";
import { useState } from "react";
import Chats from "./Chats";
//import styles from "./register.module.css";
//import Login from "./Login";

export default function Register(props) {
  const [username, setUsername] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [secret, setSecret] = useState("");
  const [status, setStatus] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    localStorage.setItem("username", username);
    localStorage.setItem("secret", secret);
  }, [username, secret]);

  const usernameVal = useRef(username);
  const secretVal = useRef(secret);

  const UserContext = createContext();

  const onSignup = async (e) => {
    e.preventDefault();

    setLoading(true);
    try {
      const response = await Axios.post("http://localhost:8000/home", {
        username: username,
        secret: secret,
        email: email,
        first_name: first_name,
        last_name: last_name,
      })
        .then((r) => {
          if (r.status === 200) {
            setStatus(`User ${username} created`);
            const newUser = props.auth({ ...r.data, secret });
            console.log(newUser);
          } else {
            setStatus(`Error while creating ${username}`);
          }
        })
        .catch((e) => {
          setStatus(`${e}`);
        });
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <div>
      <section className="container">
        <header>Registration Form</header>
        <form action="#" className="form" onSubmit={onSignup}>
          <h1 style={{ color: "black" }}>Register</h1>
          <div className="input-box">
            <label>Enter Username</label>
            <input
              type="text"
              placeholder="Enter Username"
              required
              name="username"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              ref={usernameVal}
            />
          </div>
          <div className="input-box">
            <label>First Name</label>
            <input
              type="text"
              placeholder="Enter First name"
              required
              name="first_name"
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
          </div>
          <div className="input-box">
            <label>Last Name</label>
            <input
              type="text"
              placeholder="Enter last name"
              required
              name="last_name"
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </div>
          <div className="input-box">
            <label>Password</label>
            <input
              type="password"
              placeholder="Create Password"
              required
              name="secret"
              onChange={(e) => {
                setSecret(e.target.value);
              }}
              ref={secretVal}
            />
          </div>
          <div className="input-box">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="Enter email address"
              required
              name="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="column"></div>
          <p>{error}</p>
          <p>{status === "" ? "" : status}</p>
          <button type="submit">{loading ? "Loading..." : "Submit"}</button>
        </form>
      </section>
    </div>
  );
}
