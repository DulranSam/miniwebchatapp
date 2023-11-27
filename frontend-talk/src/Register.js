import React, { useEffect, useState } from "react";
import Axios from "axios";

export default function Register(props) {
  const [username, setUsername] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [photo, setPhoto] = useState();

  const onSignup = async (e) => {
    e.preventDefault();

    setLoading(true);
    try {
      const response = await props.auth({
        username,
        first_name,
        last_name,
        email,
        photo,
      });

      if (response.status === 200) {
        setError("Everything's fine");
      } else {
        setError("Registration failed. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <section className="container">
        <header>Registration Form</header>
        <form className="form" onSubmit={onSignup}>
          <h1 style={{ color: "black" }}>Register</h1>
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
            <label>First Name</label>
            <input
              type="text"
              placeholder="Enter First name"
              required
              name="first_name"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="input-box">
            <label>Last Name</label>
            <input
              type="text"
              placeholder="Enter last name"
              required
              name="last_name"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="input-box">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="Enter email address"
              required
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="column">
            <label>
              <input
                onChange={(e) => {
                  setPhoto(e.target.files[0]);
                }}
                type="file"
              ></input>
            </label>
          </div>
          <p>{error}</p>
          <button type="submit">{loading ? "Loading..." : "Submit"}</button>
        </form>
      </section>
    </div>
  );
}
