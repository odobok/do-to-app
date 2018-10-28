import React from 'react';
import logo from './logo.png';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

const Header = () => (
  <Router>
      <header className="App-header">
        <h1>Due To</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to your app for collaborative work.
        </p>
      </header>
    </Router>
);

export default Header;
