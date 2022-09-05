import React from 'react';
import { Link } from "react-router-dom";
import DisplayPosts from '../components/displayPosts';
import CreatePost from '../components/createPost';

export default function HomePage() {

    return (
        <section>
            <nav>
            <Link to = "/login" >Déconnectez-vous </Link>
            <Link to="/profile">Profil </Link>
            </nav>
            <div>
                <section>
                    <h1>Exprimez-vous !</h1>
                    <CreatePost/>
                </section>
                <section>
                    <DisplayPosts/>
                </section>
            </div>    
        </section>
    )
}