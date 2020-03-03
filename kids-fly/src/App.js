import React from 'react';
// import logo from './logo.svg';
import './App.css';

import { Route} from "react-router-dom";

import ParentLoginForm from "./components/ParentLoginForm";

function App() {
  return (
    <div className="App">
      <Route path="/login" component={ParentLoginForm} />
    </div>
  );
}

export default App;