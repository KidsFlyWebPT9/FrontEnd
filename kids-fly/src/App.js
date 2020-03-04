import React, { useState } from 'react';
import './App.css';

import { Route } from "react-router-dom";
import NewTripContext from "./context/NewTripContext";

import ParentLoginForm from "./components/ParentLoginForm";
import Dashboard from "./components/Dashboard";
import NewTrip from "./components/NewTrip";
import ParentRegister from "./components/ParentRegister";
import PrivateRoute from './components/PrivateRoute';

function App() {
  const [newTrip, setNewTrip] = useState([])

  return (
    <NewTripContext.Provider value={[newTrip, setNewTrip]}>
      <div className="App">
        <Route exact path="/" component={ParentRegister} />
        <Route path="/login" component={ParentLoginForm} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <Route path="/new-trip" component={NewTrip} />
      </div>
    </NewTripContext.Provider>
  );
}

export default App;