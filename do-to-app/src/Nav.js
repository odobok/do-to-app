import React from 'react';
import logo from './logo.png';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

const Nav = () => (
  <Router>
    <nav className="Nav-header">
      <h4>Due To</h4>
      <img src={logo} className="App-logo" alt="logo" />
    </nav>
    </Router>
);

export default Nav;
