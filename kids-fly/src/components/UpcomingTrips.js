// import React, { useContext, useEffect } from "react";
// import NewTripContext from "../context/NewTripContext";
// import { axiosWithAuth } from "../utils/axiosWithAuth";
// import TripCard from './TripCard';
// import { Link } from 'react-router-dom';

import React from "react";

const UpcomingTrips = () => {
  // const {trips, addNewTrip} = useContext(NewTripContext);

  // console.log(trips);

  return (
    <div>
      {/* {trips.length > 0 ? ( 
        trips.map(trip => {
          return <div>
            <TripCard trip={trip}/>
          </div>
        })
      ) : (
        <h3>You have no upcoming trips</h3>
      )
      }
      <Link to="/dashboard">
        <button className="btn-Style">Return</button>
      </Link> */}
    </div>
  )
};

export default UpcomingTrips;