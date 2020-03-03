import React from 'react';
// import logo from './logo.svg';
import './App.css';

import { Route } from "react-router-dom";

import ParentLoginForm from "./components/ParentLoginForm";
import Dashboard from "./components/Dashboard";
import NewTrip from "./components/NewTrip";

function App() {
  return (
    <div className="App">
      <Route path="/login" component={ParentLoginForm} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/new-trip" component={NewTrip} />
    </div>
  );
}

export default App;