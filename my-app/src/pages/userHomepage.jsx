import React from 'react';
import ReactDOM from "react-dom";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useRef, useState, useContext,  } from "react";
import Sidebar from '../components/sidebar';
import CreateMessage from '../components/createMessage';

export default function UserHomepage () {
//let {userId}=useParams();
return (

    <div>
        <Sidebar />
        <CreateMessage />
    </div>
)
}