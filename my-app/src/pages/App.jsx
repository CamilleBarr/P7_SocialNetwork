import React from 'react';
//import logo from './icon-left-font-monochrome-white.svg';
import reactDOM from "react-dom";
//import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";



//import { Link } from "react-router-dom";
import Home from './home';
import Login from './login';
import SignUp from './signup';
import Footer from '../components/footer';
import Header from '../components/header';


function App() {


  return (
    <BrowserRouter>
      <Header />
      <Home />
      <Footer />
      <Routes>
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/signup" element={<SignUp/>} />
        </Routes>
        
      
    </BrowserRouter>
  )
}

export default App

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
