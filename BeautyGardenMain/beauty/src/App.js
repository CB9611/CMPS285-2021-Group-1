import logo from './logo.svg';
import './App.css';
import React from "react";
import Home from './Home';
import Contact from './Contact';
import About from './About';
import {Route, Link} from "react-router-dom";
import NavBar from "./NavBar";
function App() {
  return (
    <div className="App">
          <NavBar/>
        </div>
  );
}

export default App;
