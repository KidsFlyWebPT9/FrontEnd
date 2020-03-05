import React, { useState } from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NewTripContext from "./context/NewTripContext";
// import CreateLogin from "./components/CreateLogin";
import ParentLoginForm from "./components/ParentLoginForm";
import Dashboard from "./components/Dashboard";
import NewTrip from "./components/NewTrip";
import ParentRegister from "./components/ParentRegister";
import PrivateRoute from './components/PrivateRoute';
import LandingPage from './components/LandingPage';
import Header from './components/Header';
import ParentInfo from './components/ParentInfo';

export default function App() {
  const [newTrip, setNewTrip] = useState([])

  return (
    <NewTripContext.Provider value={[newTrip, setNewTrip]}>
      <div className="App">
        <Header />
        <LandingPage exact path="/landing-page" component={LandingPage} />
        <Route exact path="/" component={ParentRegister} />
        <Route path="/login" component={ParentLoginForm} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <Route path="/new-trip" component={NewTrip} />
        <Route path="/parent-info" component={ParentInfo} />
        {/* <Route path="/create-login" component={CreateLogin} /> */}
      </div>
    </NewTripContext.Provider>
  );
}