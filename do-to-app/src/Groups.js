import React from 'react';
import person from './icon-1.png';
import pair from './icon-2.png';
import threesome from './icon-3.png';
import self from './icon-person.png';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

const Groups = () => (
  <Router>
    <groups className="Groups">
      <parsing-groups className="Groups-parsing">
        <img src={person} className="icon" alt="one-person" />
        <h4>Start a New Group</h4>
      </parsing-groups>
      <parsing-groups className="Groups-parsing">
        <img src={self} className="icon" alt="one-person" />
        <h4>My group of just me</h4>
      </parsing-groups>
      <parsing-groups className="Groups-parsing">
        <img src={pair} className="icon" alt="two-people" />
        <h4>Research Partnership in Science class</h4>
      </parsing-groups>
      <parsing-groups className="Groups-parsing">
        <img src={pair} className="icon" alt="two-people" />
        <h4>Partner work for Music Project</h4>
      </parsing-groups>
      <parsing-groups className="Groups-parsing">
        <img src={threesome} className="icon" alt="three-people" />
        <h4>Community research project</h4>
      </parsing-groups>
      <parsing-groups className="Groups-parsing">
        <img src={threesome} className="icon" alt="three-people" />
        <h4>My group of three in Math class</h4>
      </parsing-groups>
    </groups>
    </Router>
);

export default Groups;
