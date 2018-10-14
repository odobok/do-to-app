import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Do To</h1>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Welcome to your app for collaborative work.
          </p>
          <button> Login </button>
        </header>
      </div>
    );
  }
}

export default App;
