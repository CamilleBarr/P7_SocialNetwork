import React, { useEffect, useState } from 'react';
import Post from './createPost';

function DisplayPosts () {
    const noMessageText = "Personne n'a encore laissé de message. Soyez le premier ?"
    const [posts, setPosts] = useState([]);
    useEffect(()=> {
        fetch('http://localhost:3000/homepage/', {
            method : "GET",
            headers : {'authorization:' : `Bearer $(token)}`
        }})
            .then((res)=>{res.json()})
            .then((allPosts)=>{setPosts(allPosts)})
            .catch((err)=>{
                alert("Impossible d'afficher les messages postés");
                console.log(err)
            })
        
        })
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



export default DisplayPosts;
