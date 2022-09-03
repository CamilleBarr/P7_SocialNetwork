import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function PostArchitecture(props, data) {
  let [likes , setLikes] = useState(data.likes)
  const navigate = useNavigate();
  let token = localStorage.getItem('token');
  let userId = localStorage.getItem('userId');
  let usersLiked = data.usersLiked;
  const presentLike = (element) => element === userId;
  let findLike = usersLiked.some(presentLike);
  let [isLiked, setIsLiked] = useState(findLike)
  let like = undefined
  //let [description, setDescription] = useState(data.description)
  function formatDate(date) {
    return date.toLocaleDateString();
  }
  
  function Avatar(props) {
    return (
      <img
        className="Avatar"
        src={props.user.avatarUrl}
        alt={props.user.name}
      />
    );
  }
  
  function UserInfo(props) {
    return (
      <div className="UserInfo">
        <Avatar user={props.user} />
        <div className="UserInfo-name">{props.user.name}</div>
      </div>
    );
  }
  
  function AddLike(){
    like = 1
    fetch("http://localhost:3000/like", {
        method: "POST",
          headers: { 
          'Accept': 'application/json', 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({like, userId, data}),
        })
        .then((res)=>{
            if(res.ok){
                return res.json();
            }
        })
        .then((res)=>{
            setLikes(likes += 1)
            setIsLiked(true)
        })
        .catch((err)=>{
            console.log(err)
    })
}

function CancelLike(){
  like = 0
  fetch("http://localhost:3000/like", {
      method: "POST",
        headers: { 
        'Accept': 'application/json', 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({like, data, userId}),
      })
      .then((res)=>{
          if(res.ok){
              return res.json();
          }
      })
      .then((res)=>{
          setLikes(likes -= 1)
          setIsLiked(false)
      })
      .catch((err)=>{
          console.log(err)
  })
}
function DeletePost(){
  fetch("http://localhost:3000/delete", {
      method: "POST",
        headers: { 
        'Accept': 'application/json', 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({userId, data}),
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

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
      <div>
          {
            isLiked === false
              ? <button onClick={AddLike}><i class="fa-regular fa-thumbs-up"></i></button>
              : <button onClick={CancelLike}><i class="fa-solid fa-thumbs-up"></i></button>
          }
      </div>
        {
          (data.userId === userId || userId === process.env.REACT_APP_ADMIN_USERID) &&
            <div>
              <button onClick={DeletePost}>Supprimer</button>
              <Link to={(`/modify?id=${data._id}`)}>Modifier</Link>
            </div>
        }

    </div>
  );
}
  
  const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
      name: 'Hello Kitty',
      avatarUrl: 'https://placekitten.com/g/64/64',
    }
  }
 return(
  <>
    <Comment
      date={comment.date}
      text={comment.text}
      author={comment.author}
    />
    </>
  )
}
export default PostArchitecture;