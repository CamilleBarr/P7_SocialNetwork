import React from 'react';
import ReactDOM from "react-dom";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useRef, useState, useContext,  } from "react";
import Sidebar from '../components/sidebar';
import MessageList from '../components/messageList';
import Message from '../components/message';

export default function UserHomepage () {

//let {userId}=useParams();
return (

    <div>
        <Message/>
    </div>
)
}