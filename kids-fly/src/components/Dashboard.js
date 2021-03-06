import React, { useContext, useEffect, useState } from "react";
import AppHeader from "./AppHeader";

import { axiosWithAuth } from '../utils/axiosWithAuth';

import IdContext from '../context/IdContext';

import { Link } from "react-router-dom";

const Dashboard = () => {
  
  const {id} = useContext(IdContext);

  const [name, setName] = useState("");

  // console.log("this is username in Dashboard", username);

  useEffect(() => {
    getData()
  }, [name]);

  const getData = () => {
    axiosWithAuth()
      .get(`https://kidsfly1.herokuapp.com/api/users/${id}`)
      .then(res => {
        console.log("res", res);
        setName(res.data.name);
      })
      .catch(err => {console.log(err)});
  };

  return (
    <div>
      <AppHeader userName={name} />
      <div className="dash-btn-container">
        <Link to="/account"><button>Account</button></Link>
        <Link to="/upcoming-trips"><button>Upcoming Trips</button></Link>
        <Link to="/new-trip"><button>New Trip</button></Link>
      </div>
    </div>
  )
};

export default Dashboard;