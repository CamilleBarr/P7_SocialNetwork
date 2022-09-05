import React from 'react';
import { Link } from "react-router-dom";
import { useRef, useState, useContext, } from "react";
import DisplayPosts from '../components/displayPosts';
import CreatePost from '../components/createPost';
import Logout from './logout';
import Profile from './profile';

export default function HomePage() {

    
    return (
        <section>
            <nav>
            <Link to= "/signup">Déconnectez-vous </Link>
            <Link to="/profile">Profil </Link>
            </nav>
            <div>
                <section>
                    <h1>Exprimez-vous !</h1>
                    <CreatePost/>
                </section>
                <section>
                    
                </section>
                <section>
                    <DisplayPosts/>
                </section>
            </div>
            
        </section>
    )
}