import React , { Component } from 'react';
import Nav from './Nav';
import Groups from './Groups';
import { BrowserRouter as Router } from 'react-router-dom';

class Main extends Component {
  render() {
    return (
      <div className = "Main" >
        <div>
          <Nav/>
          <Groups/>
        </div>
        </div>
      );
  }
};

export default Main;
