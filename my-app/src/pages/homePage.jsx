import React from 'react';
import ReactDOM from "react-dom";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useRef, useState, useContext, } from "react";
import { IdContext } from '../App'
import { TokenContext } from '../App'
import { NameContext } from '../App'
import DisplayPosts from '../components/displayPosts';
import CreatePost from '../components/createPost';

export default function HomePage() {

    //const [isShown, SetIsShown] = useState()
    //let {userId}=useParams();
    return (
        <section>
            
            <div>
                <section>
                    <h1>Exprimez-vous !</h1>
                    <CreatePost/>
                </section>
                <section>
                    
                </section>
                <section>
                    <h1>Lisez les messages déjà postés :</h1>
                    <DisplayPosts/>
                </section>
            </div>
            
        </section>
    )
}