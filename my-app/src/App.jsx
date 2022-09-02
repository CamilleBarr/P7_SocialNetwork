import React from 'react';
//import logo from './icon-left-font-monochrome-white.svg';
//import reactDOM from "react-dom";
//import './App.css';
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import {useState} from 'react';
import MixDataProvider from './providerOfContext';
import HomePage from './pages/homePage';
import Login from './pages/login';
import SignUp from './pages/signup';
//import {MixDataProvider} from '../provider'
import Footer from './components/footer';
import Header from './components/header';

function App() {
//const [isOnline, setIsOnline]=useState(false);
/*
const handleClick = event => {
  setIsOnline(current => !current) 

}*/

const [connection, setConnection] = useState(false);

  return (
    <BrowserRouter>
      <MixDataProvider>
        <Header />   
              <Routes>
      
                {/* <div className='lmj-layout-inner'>
                    <Cart cart={cart} updateCart={updateCart} />
                    <ShoppingList cart={cart} updateCart={updateCart} />
                </div> */}
            
                <Route path="/" element={<Navigate replace to='/homePage'/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/signup" element={<SignUp/>} />
                <Route path="/homePage" element={<HomePage/>} />      
              </Routes>
            <Footer />
        </MixDataProvider>
    </BrowserRouter>
  )
}

export default App