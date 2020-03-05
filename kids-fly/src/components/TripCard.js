import React, { useContext } from "react";

// import NewTripContext from "../context/NewTripContext";

const TripCard = ({ trip }) => {

  // const {deleteTrip} = useContext(NewTripContext);

  return (
    <div>
      <div className="card-container">

        <div className="x-container">
          <span className="delete" onClick={e => {
            e.stopPropagation();
            // deleteTrip(trip);
            }
          }>
            X
          </span>{" "}
          {/* {color.color} */}
        </div>

        <h3 className="h3-date">Departure Date: {trip.departDate}</h3>

        <h3 className="h3-styled">Airport: {trip.airportName}</h3>
        
        <h3 className="h3-styled">Airline: {trip.airline}</h3>

        <h3 className="h3-styled">Flight Number: {trip.flightNumber}</h3>

        <h3 className="h3-styled">Number of Carry-ons: {trip.numCarryOns}</h3>

        <h3 className="h3-styled">Number of kids: {trip.numKids}</h3>
        
        <div className="notes-container">
          <h3 className="h3-notes">Notes:</h3>
          <p className="p-notes">{trip.notes}</p>
        </div>
      </div>
    </div>
  );
};

export default TripCard;