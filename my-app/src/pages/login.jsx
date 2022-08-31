import React from "react";

import { useNavigate } from "react-router-dom";
import {useRef } from "react"

/*
function Login () {



/*   
import { useRef } from "react";
function Login() {
  const passwordRef = useRef();
  const emailRef = useRef();
  let navigate = useNavigate();
  // const [errorEmail, setErrorEmail] = useState(null);
  function handleSubmit(event) {
    event.preventDefault();
    const savedEmail = emailRef.current.value;
    const savedPassword = passwordRef.current.value;
    const formData = {
      email: savedEmail,
      password: savedPassword,
    };
    const urlSignIn = "http://localhost:3001/api/auth/login";
    fetch(urlSignIn, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify(formData),
    }).then(function(res) {
      if (res.ok) {
        return res.json();
      }
    });

    //redirect to feed page
    navigate("/profile", { replace: true });
  }
  return (
    <section className="signIn">
      <h1>Connectez-vous</h1>
      <form className="signIn__form">
        <input type="email" placeholder="Email" ref={emailRef} />
        <input type="password" placeholder="Mot de passe" ref={passwordRef} />
        <button className="signIn--button" onClick={handleSubmit}>
          Se connecter
        </button>
      </form>
      <p>Pas encore de compte?</p>
      {/*
      <Link to="/signUp" className="signIn--button">
        Créer un compte
  </Link>*/
   /* </section>
  );
} 
export default Login
*/


export default function Login() {
  const navigate = useNavigate();
  const passwordLog = useRef();
  const emailLog = useRef();

return (

<>

<h3>Vous avez déjà enregistré votre profil ? <br />Connectez-vous</h3>
        
<form className="signIn__form">
        <input type="email" placeholder="Email" ref={emailLog}/>
        <input type="password" placeholder="Mot de passe" ref={passwordLog} />
        <button className="signIn--button" onClick={() => {navigate ('/userHomepage')}} >
          Se connecter
        </button>
      </form>
     
</>

);

}