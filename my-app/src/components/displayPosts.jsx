import React, { useEffect, useState } from 'react';
import {ROOT_PATH_URL} from './server.config';

function DisplayPosts (post) {

    
    let userId = localStorage.getItem('userId');
    
    // const presentLike = (element) => element === userId;
    // let like = undefined;
    // let [likes, setLikes] = useState(likes);
    // let usersLiked = [usersLiked];
    // let findLike = usersLiked?.some(presentLike);
    // let [isLiked, setIsLiked] = useState(findLike);
    

    const [posts, setPosts] = useState([]);
    let token = localStorage.getItem('token');
    const messageText = "Lisez les messages déjà postés :"
    const noMessageText = "Personne n'a encore laissé de message. Soyez le premier ?";

    function errMessage(){
        return (<h2>Nous avons une erreur de chargement. Merci de recharger la page ultérieurement</h2>)
    }
    
   
    useEffect(()=> {
        console.log('test useeffect display post')
        fetch(`${ROOT_PATH_URL}/homepage`, {
            method : "GET",
            headers: {
                'Authorization': `Bearer ${token}`
            }

            })
            .then((res)=> res.json())
            .then((posts)=> {

                console.log('test .then posts of useeffect fun', posts)
                setPosts(posts)
            })
            .catch((error)=>{
                console.log('error', error)
                errMessage();
            });
        
        }, []);
    
        console.log(posts, "posts ?");

        function DeletePost(e){
            e.preventDefault()
            let target = e.target.id;
            console.log(target)
        
          fetch(`${ROOT_PATH_URL}/delete` + target, {
              method: "DELETE",
                headers: { 
                'Content-Type': 'application/json'
              }
              })
              .then((res)=>{
                  return res.json();
              })
              .then(() => {
                const posts = fetch(
                    `${ROOT_PATH_URL}/post`, 
                    {method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                        }   
                    }
                    )
                    .then((res) =>  res.json())
                    .then(() => {
                        let posts = posts.slice().sort(function (a, b) {
                            return new Date(b.createdAt) - new Date(a.createdAt)
                        })
                        setPosts(posts)
                    })
            })
              .catch((err)=>{
                  console.log(err)
          })
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
                        {posts.map((post) =>
                          <li key={post.id}>
                            {post.title},
                            {post.message}
                            {post.imageUrl}
                            {/* {Like()} */}
                            <div>
                <button onClick={DeletePost}>Supprimer</button>
                {/* <button onClick={ModifyPost}>Modifier</button> */}
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
                    );console.log("post.id :", post.id)
                  }
                  
    return (
         
        <div>

<Blog posts={posts} />
{/*             
            {posts?.length > 0 ? <h1>{messageText}</h1>  
            
             { posts?.map((post)=> { post 
                

            //return <PostArchitecture key={post._id} data={post}/>
             
            })}
            
            :  <h1>{noMessageText}</h1>
            
            }

            */}
             
        </div>
       
    )
}


export default DisplayPosts;
