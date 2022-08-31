import React from 'react';
import ReactDOM from "react-dom";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useRef, useState, useContext, } from "react";
import { IdContext } from '../App'
import { TokenContext } from '../App'
import { NameContext } from '../App'
import MessageList from '../components/messageList';
import Message from '../components/message';

export default function UserHomepage() {

    //const [isShown, SetIsShown] = useState()
    //let {userId}=useParams();
    return (
        <section>
            
            <div>
                <section>
                    <h1>Exprimez-vous !</h1>
                    <Message/>
                </section>
                <section>
                    <h1>Lisez les messages déjà postés :</h1>
                    <MessageList/>
                </section>
            </div>
            
        </section>
    )
}