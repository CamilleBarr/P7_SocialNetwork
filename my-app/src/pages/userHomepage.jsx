import React from 'react';
import ReactDOM from "react-dom";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useRef, useState, useContext, } from "react";
import Sidebar from '../components/sidebar';
import MessageList from '../components/messageList';
import Message from '../components/message';

export default function UserHomepage() {

    const [isShown, SetIsShown] = useState()
    //let {userId}=useParams();
    return (
        <section>
            <div>
                <h1>mon profil</h1>
                <form>
                    <input type="image" id="'image" alt="profile picture" />
                    <input type="text" placeholder="Nom" />
                    <input type="text" placeholder="Prénom" />
                </form>
                <section>
                    <Message/>
                    <MessageList/>
                </section>
            </div>
            
        </section>
    )
}