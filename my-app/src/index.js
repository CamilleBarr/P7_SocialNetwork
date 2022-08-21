import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import App from './App';

import Login from './components/login';
import Header from './components/header';
import reportWebVitals from './reportWebVitals';
//import './index.css';
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
      <App />
  </BrowserRouter>
  
);
/*
root.render(
  <BrowserRouter>
    <routes>
      <Route path="/" element={<App />} />
      <Route path="header" element={<Header />} />
      <Route path="login" element={<Login />} />
    </routes>
  </ BrowserRouter>
);
*/
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
