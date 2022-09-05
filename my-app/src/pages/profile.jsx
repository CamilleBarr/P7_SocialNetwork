import React from 'react';
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {ROOT_PATH_URL} from '../components/server.config';
import Logout from './logout';


function Profile() {
  //console.log('.............')
  //console.log('props........', data, props)
  const navigate = useNavigate();
  let token = localStorage.getItem('token');
  let userId = localStorage.getItem('userId');
  const [posts, setPosts] = useState([]);

  let [message, setMessage]=useState(message)
  
  


function ModifyPost(){
    fetch(`${ROOT_PATH_URL}/modify/:id`, {
        method: "PUT",
          headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({posts}),
        })
        .then((res)=>{
            if(res.ok){
                console.log("Ok");
                return res.json();
            }
        })
        .then((res)=>{
            navigate('/');
        })
        .catch((err)=>{
            console.log(err)
    })
  }


function Blog() {
    const myList = (
      <ul>
        {posts.map((post) =>
          <li key={post.id}>
            {post.title},
            {post.message}
            {post.imageUrl}
            <div>
                <button onClick={ModifyPost}>Modifier</button>
            </div>
          </li>
        )}
      </ul>
    );
    console.log("myList", myList)
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
        {myList}
        <hr />
        {/* {content} */}
      </div>
    );
  }



  return(
    <> 
      <h2>Profile</h2>
      <p>Vous avez possibilité ici de supprimer ou modifier votre post</p>
      <nav>
          <Link to= "/signup">Déconnectez-vous </Link>
          <Link to="/homePage">Profil </Link>
      </nav>
      <div>
          Blog()
      </div>
    </>
  )
}
export default Profile;