import React from "react";
import AppHeader from "./AppHeader";

import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <AppHeader />
      <div className="dash-btn-container">
        <button>Account</button>
        <button>Upcoming Trips</button>
        <Link to="/new-trip"><button>New Trip</button></Link>
        <button>Kids</button>
        <button>Nearby</button>
        <button>Arrived</button>
      </div>
    </div>
  )
};

export default Dashboard;