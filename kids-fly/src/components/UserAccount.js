import React, { useContext, useEffect, useState } from "react";

import { axiosWithAuth } from '../utils/axiosWithAuth';

import IdContext from '../context/IdContext';

import { Link } from "react-router-dom";

const UserAccount = () => {
  const {id} = useContext(IdContext);

  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    address: "",
    phone: "",
    username: ""
  });

  useEffect(() => {
    getData()
  }, []);

  const getData = () => {
    axiosWithAuth()
      .get(`https://kidsfly1.herokuapp.com/api/users/${id}`)
      .then(res => {
        console.log("res", res);
        setPersonalInfo(res.data);
      })
      .catch(err => {console.log(err)});
  };

  return (
    <div>
      <div className="info-container">
        <h3>My Account</h3>
        <h3>Name: {personalInfo.name}</h3>
        <h3>Username: {personalInfo.username}</h3>
        <h3>Address: {personalInfo.address}</h3>
        <h3>Phone: {personalInfo.phone}</h3>
      </div>
      <div className="btn-container">
          <Link to="/update-account">
            <button className="btn-Style">Edit</button>
          </Link>

          <Link to="/dashboard">
            <button className="btn-Style">Return</button>
          </Link>
        </div>
    </div>
  )
};

export default UserAccount;