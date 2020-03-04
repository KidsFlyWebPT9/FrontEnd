import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './index.css';
import LandingPage from './components/LandingPage';
import Header from './components/Header';

const App = () => {
    return (
        <div className="App">
            <Header />
            <LandingPage />
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
    <Router>
        <App />
    </Router>,
    rootElement
);