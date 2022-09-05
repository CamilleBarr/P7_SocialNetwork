import React from 'react';
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import {useState} from 'react';
import MixDataProvider from './providerOfContext';
import HomePage from './pages/homePage';
import Login from './pages/login';
import SignUp from './pages/signup';
import Footer from './components/footer';
import Header from './components/header';

function App() {

const [connection, setConnection] = useState(false);

  return (
    <BrowserRouter>
      <MixDataProvider>
        <Header />   
              <Routes>
                <Route path="/" element={<Navigate replace to="/login"/>} />                
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