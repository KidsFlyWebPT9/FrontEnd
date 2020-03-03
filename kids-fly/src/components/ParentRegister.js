import React, { useState } from "react";
// import axios from "axios";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { Link } from "react-router-dom";



const ParentRegister = props => {
  const [credentials, setCredentials] = useState({
    // id: new Date(),
    username: '',
    password: ''
    // firstName: '',
    // lastName: '',
    // address: '',
    // airport: '',
    // phoneNumber: ''
  });

  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
  };

  console.log("this is username: ", credentials.username);
  console.log("this is password: ", credentials.password);

  const handleRegister = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("https://kidsfly-lambda2.herokuapp.com/api/auth/register", credentials)
      .then(res => {
        console.log("this is res in handleLogin: ", res);
        props.history.push("/login");
      })
      .catch(err => {
      console.log("invalid login", err);
    });
    setCredentials({
      username: '',
      password: ''
      // firstName: '',
      // lastName: '',
      // address: '',
      // airport: '',
      // phoneNumber: ''
    });
  };

  return (
    <div>
      <h3>Register</h3>
        <form className="form-styled" onSubmit={handleRegister}>
          <label>Username: </label>
          <input className="field-styled"
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChange}
          />
          <label>Password: </label>
          <input className="field-styled"
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
          />
          {/* <label>First Name: </label>
          <input
            type="text"
            name="firstName"
            value={credentials.firstName}
            onChange={handleChange}
          />
          <label>Last Name: </label>
          <input
            type="text"
            name="lastName"
            value={credentials.lastName}
            onChange={handleChange}
          />
          <label>Address: </label>
          <input
            type="text"
            name="address"
            value={credentials.address}
            onChange={handleChange}
          />
          <label>Airport: </label>
          <input
            type="text"
            name="airport"
            value={credentials.airport}
            onChange={handleChange}
          />
          <label>Phone Number: </label>
          <input
            type="text"
            name="phoneNumber"
            value={credentials.phoneNumber}
            onChange={handleChange}
          /> */}
          <div className="btn-container">
            <button className="btn-Style">Register</button>
          </div>
        </form>
        <div className="btn-container">
          <Link exact to="/login">
            <button className="btn-Style">Go to login</button>
          </Link>
        </div>
    </div>
  );
};

export default ParentRegister;