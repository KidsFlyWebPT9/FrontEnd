import React, { useContext, useState} from "react";
import { Link, withRouter } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";

// import NewTripContext from "../context/NewTripContext";
import IdContext from '../context/IdContext';


const NewTrip = props => {

  // const {trips, addNewTrip} = useContext(NewTripContext);

  const {id} = useContext(IdContext);

  const [newTrip, setNewTrip] = useState(
    {
      user_id: id,
      airport_id: 1,
      airline: "",
      flight_number: "",
      departure_time: "",
      luggage: 0,
      children: 0,
      special_needs: ""
    }
  );

  // useEffect(() => {
  //   if(status) {
  //     addNewTrip(status);
  //   };
  // },[status]);

  const handleChange = e => {
    setNewTrip({
      ...newTrip,
      [e.target.name]: e.target.value
    })
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log("this is newTrip", newTrip);
    // this is where axios goes
    axiosWithAuth()
      .post(`https://kidsfly1.herokuapp.com/api/users/${id}/newtrip`, newTrip)
      .then(res => {
        console.log("this is res", res);
        props.history.push("/dashboard");
      })
      .catch(err => {console.log("Error: ", err);});
  };

  return (
    <div>
      <h2>Create A New Trip</h2>
      <form onSubmit={handleSubmit} className="form-styled">

      <div className="field-container">
          <label htmlFor="departure_time">Departure Time:
            <input className="field-styled"
              id="departure_time"
              type="text"
              name="departure_time"
              onChange={handleChange}
              value={newTrip.departure_time}
            />
          </label>
        </div>

        <div className="field-container">
          <label htmlFor="airport_id">Airport Id: 
            <input className="field-styled"
              id="airport_id"
              type="number"
              name="airport_id"
              onChange={handleChange}
              value={newTrip.airport_id}
              // placeholder=""
            />
          </label>
        </div>

        <div className="field-container">
          <label htmlFor="airline">Airline: 
            <input className="field-styled"
              id="airline"
              type="text"
              name="airline"
              onChange={handleChange}
              value={newTrip.airline}
            />
          </label>
        </div>

        <div className="field-container">
          <label htmlFor="flight_number">Flight Number: 
            <input className="field-styled"
              id="flight_number"
              type="text"
              name="flight_number"
              onChange={handleChange}
              value={newTrip.flight_number}
            />
          </label>
        </div>

        <div className="field-container">
          <label htmlFor="luggage">Luggage Quantity:
            <input className="field-styled"
              id="luggage"
              type="number"
              name="luggage"
              onChange={handleChange}
              value={newTrip.luggage}
            />
          </label>
        </div>

        <div className="field-container">
          <label htmlFor="children">Number Of Children:
            <input className="field-styled"
              id="children"
              type="number"
              name="children"
              onChange={handleChange}
              value={newTrip.children}
            />
          </label>
        </div>

        <div className="field-container">
          <label htmlFor="special_needs">Special Needs:
            <input className="field-styled"
              type="text"
              id="special_needs"
              name="special_needs"
              onChange={handleChange}
              value={newTrip.special_needs}
            />
          </label>
        </div>

        <div className="btn-container">
          {/* SubButton = <button> */}
          <button className="btn-Style" type="submit">Create Trip</button>

          <Link to="/dashboard">
            <button className="btn-Style">Return</button>
          </Link>
        </div>

      </form>
    </div>
  )
};

export default withRouter(NewTrip);
