import React, { useContext, useEffect, useState } from "react";
// import NewTripContext from "../context/NewTripContext";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import TripCard from './TripCard';
import { Link, withRouter } from 'react-router-dom';

import IdContext from '../context/IdContext';


const UpcomingTrips = props => {
  const {id} = useContext(IdContext);

  const [trips, setTrips] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axiosWithAuth()
      .get(`https://kidsfly1.herokuapp.com/api/trips`)
      .then(res => {
        console.log("res", res);
        setTrips(res.data);
      })
      .catch(err => {console.log(err)});
  };

  return (
    <div>
      <h3>Upcoming Trips</h3>
      {trips.length > 0 ? ( 
        trips.map(trip => {
          return <div>
           {id === trip.user_id && <TripCard trip={trip} props={props}/>}
          </div>
        })
      ) : (
        <h3>You have no upcoming trips</h3>
      )
      }
      <Link to="/dashboard">
        <button className="btn-Style">Return</button>
      </Link>
    </div>
  )
};

export default withRouter(UpcomingTrips);