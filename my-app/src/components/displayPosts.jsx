import React, { useEffect, useState } from 'react';
import PostArchitecture from './postArchitecture';
import {ROOT_PATH_URL} from './server.config';

function DisplayPosts () {
    const messageText = "Lisez les messages déjà postés :"
    const noMessageText = "Personne n'a encore laissé de message. Soyez le premier ?";
    function errMessage(){
        return (<h2>Nous avons une erreur de chargement. Merci de recharger la page ultérieurement</h2>)}
    const [posts, setPosts] = useState([]);
  let token = localStorage.getItem('token');
   
    useEffect(()=> {
        console.log('home page eafzfz')
        fetch(`${ROOT_PATH_URL}/homepage`, {
            method : "GET",
            headers: {
                'Authorization': `Bearer ${token}`
            }

            })
            .then((res)=> res.json())
            .then((posts)=> {

                console.log('postihbjks', posts)
                setPosts(posts)
            })
            .catch((error)=>{
                console.log('error', error)
            //    alert("Impossible d'afficher les messages postés");
                errMessage();
              //  console.log("Impossible d'afficher les messages postés")
            });
        
        }, []);
    
        console.log(posts, "posts ?");
    
            
                //    <card key={post._id}>
                //        <h2>{post.title}</h2>
                //        <p>{post.description}</p>
                //    </card>
            
    return (
         
        <div>
            
            {posts?.length > 0 ? <h1>{messageText}</h1>  :  <h1>{noMessageText}</h1>
            
            }

            { posts?.map((post)=> {
            console.log('post', post)
        return <PostArchitecture key={post._id} data={post}/>
         
        })}
             
        </div>
       
    )
}


export default DisplayPosts;
