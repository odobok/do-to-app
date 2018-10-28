import React from 'react';
import logo from './logo.png';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

const Nav = () => (
  <Router>
    <nav className="Nav-header">
      <div><h4 className="Nav-mini">Due To</h4></div>
      <div>All | <b> Groups </b></div>
      <div><img src={logo} className="Nav-logo" alt="logo" /></div>
    </nav>
    </Router>
);

export default Nav;
