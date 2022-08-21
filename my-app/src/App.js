import React from 'react';
import logo from './icon-left-font-monochrome-white.svg';
import reactDOM from "react-dom";
//import './App.css';
import { Router, Routes, Route } from "react-router-dom";

import Login from './components/login';
import Header from './components/header';
import { Link } from "react-router-dom";
{/*import Footer from './components/footer';*/};


function App() {
  return (
    <Routes>
        
        <Route exact path="/:id" component={Login} />
         
        <Route exact path="/" component={Header} />
  </Routes>
  )
}

export default App;

/* {
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/login';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
}*/
