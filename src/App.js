import React from 'react';
import './App.css';
import {HashRouter as Router, Route, Redirect} from "react-router-dom";
import About from './About/About'
import Nav from './Nav/Nav';
import Home from './Home/Home'
import { render } from '@testing-library/react';
function App() {
  return (
    <>
    <Router>
      <div>
        <Route path= '/about'
        component={About}
        />
        <Route path= '/homepage'
        component={Home}
        />
        <Nav />
      </div>
    </Router>
    
    <body>


      <footer>
        <img src="linkedin.jpg" id="linkedin" />
        <img src="github.jpg" id="github" />
      </footer>
    </body>
    </>
  );
}

export default App;
