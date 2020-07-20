import React from 'react';
import './App.css';
import {HashRouter as Router, Route, Redirect} from "react-router-dom";
import About from './About/About';
import Nav from './Nav/Nav';
import Home from './Home/Home';
import Contact from './Contact/Contact';
import { render } from '@testing-library/react';
function App() {
  return (
    <body>
      <Router>
        <Nav />
        <div>
          <Redirect exact from="/" to="/homepage" />
          <Route path="/about" component={About} />
          <Route path="/homepage" component={Home} />
          <Route path= "/contact" component={Contact} />
        </div>
      </Router>

      <footer>
        <a href="https://www.linkedin.com/in/jakedahl968/">
          <img src="linkedin.jpg" id="linkedin" />
        </a>
        <a href="https://github.com/Jakers99">
          <img src="github.jpg" id="github" />
        </a>
      </footer>
    </body>
  );
}

export default App;
