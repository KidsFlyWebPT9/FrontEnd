import React, { useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const TripCard = ({ trip, props }) => {

  const deleteTrip = () => {
    axiosWithAuth()
      .delete(`https://kidsfly1.herokuapp.com/api/trips/${trip.id}`)
      .then(res => {
        console.log("this is response from delete request: ", res)
        console.log("this is trip", trip);
        props.history.push("/dashboard");
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="card-container">

        <h3 className="h3-date">Departure Time: {trip.departure_time}</h3>

        <h3 className="h3-styled">Airport: JFK</h3>
        
        <h3 className="h3-styled">Airline: {trip.airline}</h3>

        <h3 className="h3-styled">Flight Number: {trip.flight_number}</h3>

        <h3 className="h3-styled">Luggage Quantity: {trip.luggage}</h3>

        <h3 className="h3-styled">Number of kids: {trip.children}</h3>
        
        <div className="notes-container">
          <h3 className="h3-notes">Special Needs:</h3>
          <p className="p-notes">{trip.special_needs}</p>
        </div>

        <button type="submit" onClick={deleteTrip}>Delete Trip</button>
      </div>
    </div>
  );
};

export default TripCard;