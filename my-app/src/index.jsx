import React from 'react';
import ReactDOM from 'react-dom/client';
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import App from './pages/App';
//import Feed from "./components/Feed";
//import Profile from "./components/Profile";
//import Home from "./components/Home";
//import Login from "./components/login";
//import SignUp from "./components/signup";

//import Header from "./components/header";
//import CreateMessage from "./components/CreateMessage";

//import reportWebVitals from './reportWebVitals';
//import './index.css';
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
          <App />
        
      {/*<Route path="/" element={<Header />} />
        <Route path="/home" element={<Home />} />*/}
        {/*<Route exact path="/" element={<Feed />} />*/}
        {/*<Route path="/profile" element={<Profile />} />*/}
        {/*<Route path="/login" element={<Login />} />
        <Route path="/" element={<SignUp />} />
        {/*<Route path="/createMessage" element={<CreateMessage />} />*/}
    
  </React.StrictMode>
  
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
