import React from 'react';
//import logo from './icon-left-font-monochrome-white.svg';
import reactDOM from "react-dom";
//import './App.css';
import { BrowserRouter, Router, Routes, Route} from "react-router-dom";



//import { Link } from "react-router-dom";
import Home from './home';
import UserHomepage from './userHomepage';
import Footer from '../components/footer';
import Header from '../components/header';


function App() {
//const [isOnline, setIsOnline]=useState(false);
/*
const handleClick = event => {
  setIsOnline(current => !current) 

}*/

  return (
    <BrowserRouter>
      
      <Header />
      <main>  
          <Home/>
          <UserHomepage/>
          
        
      </main>
      <Footer />
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
