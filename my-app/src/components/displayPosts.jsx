import React, { useEffect, useState } from 'react';
import {useNavigate } from "react-router-dom";
import {ROOT_PATH_URL} from './server.config';
import {getListPost} from './../api/Posts/getAllpost';

function DisplayPosts (props) {
    const { postList } = props;
    
    let userId = localStorage.getItem('userId');
    let isAdmin = localStorage.getItem('isAdmin');
    
    let navigate = useNavigate();
    
    // const presentLike = (element) => element === userId;
    let like = undefined;
    // let [likes, setLikes] = useState(likes);
    // let usersLiked = [usersLiked];
    // let findLike = usersLiked?.some(presentLike);
    // let [isLiked, setIsLiked] = useState(findLike);
    

    let token = localStorage.getItem('token');
    const messageText = "Lisez les messages déjà postés :"
    const noMessageText = "Personne n'a encore laissé de message. Soyez le premier ?";

    function errMessage(){
        return (<h2>Nous avons une erreur de chargement. Merci de recharger la page ultérieurement</h2>)
    }
  

        // function DeletePost(e){
        //     e.preventDefault()
        //     let target = e.target.id;
        //     console.log(target)
        
        //   fetch(`${ROOT_PATH_URL}/delete` + target, {
        //       method: "DELETE",
        //         headers: { 
        //         'Content-Type': 'application/json',
        //         //'authorization' : `Bearer ${token}`
        //       }
        //       })
        //       .then((res)=>{
        //           return res.json();
        //       })
        //       .then(() => {
        //         const newPostList = fetch(
        //             `${ROOT_PATH_URL}/post`, 
        //             {method: 'GET',
        //             headers: {
        //                 'Content-Type': 'application/json'
        //                 }   
        //             }
        //             )
        //             .then((res) =>  res.json())
        //             .then(() => {
        //                 let posts = posts.slice().sort(function (b, a) {
        //                     return new Date(b.createdAt) - new Date(a.createdAt)
        //                 })
        //                 setPosts(posts)
        //             })
        //     })
        //       .catch((err)=>{
        //           console.log(err)
        //   })
        // }    
        
        function DeletePost(id){
          console.log('totototototototo', id)
          if(!id) {return }
          let token = localStorage.getItem('token');

          fetch(`${ROOT_PATH_URL}/delete/post/${id}`, {
              method: "DELETE",
                 headers: { 
              //     "Access-Control-Allow-Origin-Headers": "*",
              //   //'Accept': 'application/json', 
              //   //'Content-Type': 'application/json',
                 'Authorization': `Bearer ${token}`
               }
            })
              .then(async (res)=> res.json(
                console.log("res delete fetch: ", res),
                await props.getAllpostAPi()
              ))
              .catch((err)=>{
                  console.log(err, "rentré  dans func delt post front prob conn refused or headers ?")
              })
            console.log('test delete in front hors fetch')
      }
  

    //     function AddLike(){
    //         like = 1
    //         fetch(`${ROOT_PATH_URL}/like`, {
    //             method: "POST",
    //               headers: { 
    //               'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({like, userId}),
    //             })
    //             .then((res)=>{
    //                 if(res.ok){
    //                     return res.json();
    //                 }
    //             })
    //             .then((res)=>{
    //                 setLikes(likes += 1)
    //                 setIsLiked(true)
    //             })
    //             .catch((err)=>{
    //                 console.log(err)
    //         })
    //     }
        
    //     function CancelLike(){
    //       like = 0
    //       fetch(`${ROOT_PATH_URL}/like`, {
    //           method: "DELETE",
    //             headers: { 
    //             'Content-Type': 'application/json',
    //             'Authorization': `Bearer ${token}`
    //           },
    //           body: JSON.stringify({like, userId}),
    //           })
    //           .then((res)=>{
    //               if(res.ok){
    //                   return res.json();
    //               }
    //           })
    //           .then((res)=>{
    //               setLikes(likes -= 1)
    //               setIsLiked(false)
    //           })
    //           .catch((err)=>{
    //               console.log(err)
    //       })
    //     }
    // function Like () {
    //     isLiked === false
    //           ? <button onClick={AddLike}>Like {post.likes}</button>
    //           : <button onClick={CancelLike}>Like {post.likes}</button>
    // }
                function Blog() {
                    const listOfPosts= (
                      <ul>
                        {postList.map((post) =>
                          <li key={post._id}>
                            {post._id},
                            {post.title},
                            {post.message}
                            {post.imageUrl}
                            {like}
                            <div>
                              <button onClick={() => { DeletePost(post._id)}}>Supprimer</button>
                              {post.userId === userId  && <button onClick={() => {}}>Modifier</button> }
                            </div>  
                          </li>
                        )}
                      </ul>
                    );
                    console.log("listOfPosts", listOfPosts)
                //     const content =  posts.map((post) =>
                //     <post
                //       key={post.id}
                //       id={post.id}
                //       title={post.title}
                //       message={post.message}
                //       imageUrl={post.imageUrl}
                //       likes={post.likes} />
                //   );
                  
                    return (
                      <div>
                        {listOfPosts}
                        <hr />
                        {/* {content} */}
                      </div>
                    );
                  }
                  
    return (
      <>
        <Blog posts={postList} />
        {/* <div>
            {posts?.length > 0} 
            
            <h1>{messageText}</h1>
            
            :  
            <h1>{noMessageText}</h1>  
        </div> */}
      </>
    )
}

export default DisplayPosts;
