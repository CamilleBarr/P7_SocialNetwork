import React from "react";
import { Link } from "react-router-dom";

export default function Profil() {
  let token = localStorage.getItem('token');
    let [response, setResponse] = useState(null);
    let str = window.location.href;
    let url = new URL(str);
  let id = url.searchParams.get("id");
  useEffect(() => {
  fetch(`http://localhost:3000/profil/${id}`, {
          method: "GET",
          headers: { 
          'Authorization': `Bearer ${token}`
          }
          })
          .then(function(res){
          if(res.ok){
              return res.json();
          }
          })
          .then(function(res){
          setResponse(res);
          })
          .catch(function(err){
              // afficher une erreur dans la console 
              console.log(err)
      })
  }, [])


    return (
    <div>
      <h2>mon profil</h2>
      <Link to="/homepage">Fil d'actualité</Link>
      <form>
        <input type="image" id="'image" alt="profile picture" />
        <input type="text" placeholder="Nom" />
        <input type="text" placeholder="Prénom" />
      </form>
    </div>
  );
}