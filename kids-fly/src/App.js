import React, { useState } from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NewTripContext from "./context/NewTripContext";
import IdContext from "./context/IdContext";

import ParentLoginForm from "./components/ParentLoginForm";
import Dashboard from "./components/Dashboard";
import NewTrip from "./components/NewTrip";
import ParentRegister from "./components/ParentRegister";
import PrivateRoute from './components/PrivateRoute';
import UpcomingTrips from './components/UpcomingTrips';
import UserAccount from './components/UserAccount';
import UpdateAccount from './components/UpdateAccount';

import LandingPage from './components/LandingPage';
import Header from './components/Header';
import ParentInfo from './components/ParentInfo';

export default function App() {
  const[trips, setTrips] = useState([]);

  const addNewTrip = newTrip => {
    setTrips([...trips, newTrip]);
  };

  const[id, setid] = useState(4);

  const updateId = newId => {
    setid(newId);
  };

  return (
    // <NewTripContext.Provider value={{trips, addNewTrip, deleteTrip}}>
    <IdContext.Provider value={{id, updateId}}>
      <NewTripContext.Provider value={{trips, addNewTrip}}>
        <div className="App">
          <Header />
          {/* <LandingPage exact path="/landing-page" component={LandingPage} /> */}
          <Route exact path="/" component={LandingPage} />
          <Route path="/registerExample" component={ParentRegister} />
          <Route path="/login" component={ParentLoginForm} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <PrivateRoute path="/new-trip" component={NewTrip} />
          <PrivateRoute path="/upcoming-trips" component={UpcomingTrips} />
          <PrivateRoute path="/account" component={UserAccount} />
          <PrivateRoute path="/update-account" component={UpdateAccount} />
          <Route path="/parent-info" component={ParentInfo} />
        </div>
      </NewTripContext.Provider>
    </IdContext.Provider>
  )
}