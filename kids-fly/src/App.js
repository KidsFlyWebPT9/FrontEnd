import React, { useState } from 'react';
import './App.css';

import { Route } from "react-router-dom";
import NewTripContext from "./context/NewTripContext";

import ParentLoginForm from "./components/ParentLoginForm";
import Dashboard from "./components/Dashboard";
import NewTrip from "./components/NewTrip";
import ParentRegister from "./components/ParentRegister";
import PrivateRoute from './components/PrivateRoute';
import UpcomingTrips from './components/UpcomingTrips';

function App() {
  const[trips, setTrips] = useState([]);

  const addNewTrip = newTrip => {
    setTrips([...trips, newTrip]);
  };

  return (
    <NewTripContext.Provider value={{trips, addNewTrip}}>
      <div className="App">
        <Route path="/registerExample" component={ParentRegister} />
        <Route path="/login" component={ParentLoginForm} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <Route path="/new-trip" component={NewTrip} />
        <Route path="/upcoming-trips" component={UpcomingTrips} />
      </div>
    </NewTripContext.Provider>
  );
}

export default App;