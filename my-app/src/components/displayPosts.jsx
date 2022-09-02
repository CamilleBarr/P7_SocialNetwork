import React, { useEffect, useState } from 'react';
import Post from './createPost';

function displayPosts () {
    const noMessageText = "Personne n'a encore laissé de message. Soyez le premier ?"
    const [posts, setPosts] = useState([])
    useEffect(()=> {
        fetch('http://localhost:3000/homepage/posts'
            .then((res)=>{res.json()})
            .then((allPosts)=>{setPosts(allPosts)})
            .catch((err)=>{
                alert('E-mail ou mot de passe invalide');
                console.log(err)
            })
        )})
    
    return (
         
        <div>
            {posts.map((post)=> 
                {
                    return(
                        <card key={post._id}>
                            <h2>{post.title}</h2>
                            <p>{post.description}</p>

                        </card>
                    )
                }
            )}
        </div>
    )
}



export default displayPosts;
