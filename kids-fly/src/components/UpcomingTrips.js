import React, { useContext } from "react";
import NewTripContext from "../context/NewTripContext";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const UpcomingTrips = () => {
  const {trips, addNewTrip} = useContext(NewTripContext);

  console.log(trips);

  return (
    <div>
      {trips.length > 0 ? ( 
        trips.map(trip => {
          return <div>
            <h1>{trip.airportName}</h1>
          </div>
        })
      ) : (
        <h3>You have no upcoming trips.</h3>
      )
      }
    </div>
  )
};

export default UpcomingTrips;