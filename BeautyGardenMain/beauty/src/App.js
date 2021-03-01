import React, { useState } from 'react';
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Navigation from "./Navigation";
import ListPage from './ListPage';

import {BrowserRouter as Router,
  Switch,
  Route,
  Link 
  } from "react-router-dom";

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navigation />
      <Router>
      <div>


        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/listpage">
            <ListPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
         
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default Example;