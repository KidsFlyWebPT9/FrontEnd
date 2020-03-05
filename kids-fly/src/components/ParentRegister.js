// import React, { useState } from "react";
import React, { useState, useContext } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { Link } from "react-router-dom";

import IdContext from '../context/IdContext';

const ParentRegister = props => {
  const {updateId} = useContext(IdContext);

  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
    // name: '',
    // address: '',
    // airport_id: '',
    // phone: ''
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
      // .post("https://kidsflypt9.herokuapp.com/users", credentials)
      // .post("https://kidsfly-lambda2.herokuapp.com/register", credentials)
      .post("https://kidsfly1.herokuapp.com/api/auth/register", credentials)
      .then(res => {
        console.log("this is res in handleLogin: ", res);
        updateId(res.data.id);
        props.history.push("/login");
      })
      .catch(err => {
      console.log("invalid login", err);
    });
    setCredentials({
      username: '',
      password: ''
      // name: '',
      // address: '',
      // airport_id: '',
      // phone: ''
    });
  };

  return (
    <div>
      <h3>Parent Register</h3>
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
          <input className="field-styled"
            type="text"
            name="first_name"
            value={credentials.first_name}
            onChange={handleChange}
          />
          <label>Last Name: </label>
          <input className="field-styled"
            type="text"
            name="last_name"
            value={credentials.last_name}
            onChange={handleChange}
          />
          <label>Airport: </label>
          <input className="field-styled"
            type="text"
            name="airport"
            value={credentials.airport}
            onChange={handleChange}
          />
          <label>Phone Number: </label>
          <input className="field-styled"
            type="text"
            name="phone"
            value={credentials.phone}
            onChange={handleChange}
          /> */}
          <div className="btn-container">
            <button className="btn-Style">Register</button>
          </div>
        </form>
        {/* <div className="btn-container">
          <Link exact to="/login">
            <button className="btn-Style">Go to login</button>
          </Link>
        </div> */}
        <span>Already a member? </span><Link to="/login">Sign In</Link>
    </div>
  );
};

export default ParentRegister;