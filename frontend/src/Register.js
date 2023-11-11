import React from 'react'
import Axios from "axios";
import { useState } from 'react';
//import "./register.module.css";


export default function Register(props) {

    const [username, setUsername] = useState("");
    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [secret, setSecret] = useState("");
    const [email, setEmail] = useState("");
  
    const onSignup = (e) => {
      e.preventDefault();
      Axios.post("http://localhost:8000/home", {
        username,
        secret,
        email,
        first_name,
        last_name,
      })
        .then((r) => props.onAuth({ ...r.data, secret }))
        .catch((e) => console.log(JSON.stringify(e.response.data)));
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
      <button type="submit">Submit</button>
    </form>
  </section>
    </div>
  )
}


