import React from 'react';
//import logo from './icon-left-font-monochrome-white.svg';
//import reactDOM from "react-dom";
//import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";



//import { Link } from "react-router-dom";
import Home from './pages/home';
import HomePage from './pages/homePage';
import Login from './components/login';
import SignUp from './components/signup';
//import {MixDataProvider} from '../provider'
import Footer from './components/footer';
import Header from './components/header';

export const TokenContext = React.createContext()
export const IdContext = React.createContext()
export const NameContext = React.createContext()
export const LogInContext = React.createContext()

function App() {
//const [isOnline, setIsOnline]=useState(false);
/*
const handleClick = event => {
  setIsOnline(current => !current) 

}*/

const [token, setToken] = React.useState()
    const [id, setId] = React.useState()
    const [name, setName] = React.useState()

  return (
    <BrowserRouter>
    <TokenContext.Provider value={[token, setToken]}>
                    <IdContext.Provider value={[id, setId]}>
                        <NameContext.Provider value={[name, setName]}>
        <Header />   
          <Routes>        
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/login" element={<Login/>} />
            <Route exact path="/signup" element={<SignUp/>} />
            <Route exact path="/homePage" element={<HomePage/>} />      
          </Routes>
        <Footer />
        </NameContext.Provider>
                    </IdContext.Provider>
                </TokenContext.Provider>
    </BrowserRouter>
  )
}

export default App