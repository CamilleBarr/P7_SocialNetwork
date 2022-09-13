import React,{useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import DisplayPosts from '../components/displayPosts';
import CreatePost from '../components/createPost';
import {getListPost} from './../api/Posts/getAllpost';

export default function HomePage() {
    const [posts, setPosts] = useState([]);

    const getAllpostAPi = async () => {
        const postRecovry = await getListPost();
          setPosts(postRecovry)
      }

    useEffect(()=> {
        console.log('test useeffect display post')
        getAllpostAPi()
        }, []);

    return (
        <section>
            <nav>
            <Link to = "/login" >Déconnectez-vous </Link>
            <Link to="/profile">Profil </Link>
            </nav>
            <div>
                <section>
                    <h1>Exprimez-vous !</h1>
                    <CreatePost getAllpostAPi={getAllpostAPi}  />
                </section>
                <section>
                    <DisplayPosts getAllpostAPi={getAllpostAPi} postList= {posts} />
                </section>
            </div>    
        </section>
    )
}