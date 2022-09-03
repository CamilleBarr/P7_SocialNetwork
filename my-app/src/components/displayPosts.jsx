import React, { useEffect, useState } from 'react';
import PostArchitecture from './postArchitecture';

function DisplayPosts () {
    const messageText = "Lisez les messages déjà postés :"
    const noMessageText = "Personne n'a encore laissé de message. Soyez le premier ?";
    function errMessage(){return (<h2>Nous avons une erreur de chargement. Merci de recharger la page ultérieurement</h2>)}
    const [posts, setPosts] = useState([]);
   
    useEffect(()=> {
        fetch("http://localhost:3000/homepage", {
            method : "GET",
            headers : {'authorization:' : `Bearer $(token)`,'Access-Control-Allow-Origin': '*','content-type': 'application/json'}
            ,body : JSON.stringify(posts)})
            .then((res)=>{res.json()})
            .then((posts)=>{setPosts(posts)})
            .catch(()=>{
                alert("Impossible d'afficher les messages postés");
                errMessage();
                console.log("Impossible d'afficher les messages postés")
            });
        
        });
    
        console.log(posts, "posts ?");
    
        const postsMapped =
        posts.map((post)=> 
        <PostArchitecture key={post._id} data={post}/>
            
                //    <card key={post._id}>
                //        <h2>{post.title}</h2>
                //        <p>{post.description}</p>
                //    </card>
            
       )
       console.log(postsMapped, "postsMapped");
    return (
         
        <div>
            
            {postsMapped.length>0 ? <h1>{messageText}</h1>  + postsMapped :  <h1>{noMessageText}</h1>
            
            }
             
        </div>
       
    )
}


export default DisplayPosts;
