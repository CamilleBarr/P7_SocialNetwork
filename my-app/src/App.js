import React from 'react';
import logo from './icon-left-font-monochrome-white.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from './components/login';
import Header from './components/header';
{/*import Footer from './components/footer';*/};

function App() {
  return (
    <Router>
    <Routes>
        <Header />
        <Route path="/login">
          <Login />
        </Route>
    </Routes>
  </Router>,
  {/*}
    <Header />,
    <Route path="/login">
          <Login />
  </Route>*/}
  );
}

export default App;

{/* 
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
*/}
