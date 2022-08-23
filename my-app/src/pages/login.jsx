import React from "react";

import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import {useRef, useState} from "react"

/*
function Login () {

        /*{
        handleClick(e) {
            console.log(this.input.current.value)
        }
        }*/
        /*
        return (
            <h1>Welcome to our social network</h1>,
        
            <p className='form-group'>
                <label>Email Groupomania</label>
                <input type='email'></input>
                <label>Mot de passe</label>
                <input type='password'></input>,
               
            </p>,
            <button onClick={this.handleClick}>
            </button>/*,
            {
        <Link to ="/:id/"/>connecter.html</Link>}
        )
    }*/


/*    import React from "react";
import { Link, useNavigate } from "react-router-dom";
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

import { useParams } from 'react-router-dom';

export default function Login() {

  const passwordLog = useRef();
  const emailLog = useRef();
  const [errorEmail, setErrorEmail] = useState(null);

  let { id } = useParams();

return (

<>

<h2>Avez-vous déjà créer votre compte ?</h2>
<h3> Connectez-vous </h3> 
        
<form className="signIn__form">
        <input type="email" placeholder="Email" ref={emailLog}/>
        <input type="password" placeholder="Mot de passe" ref={passwordLog} />
        <button className="signIn--button" >
          Se connecter
        </button>
      </form>
        <p>Vous n'avez pas encore crée votre compte ?</p>
      <Link to="/signup" className="signIn--button">
        S'inscrire
      </Link>
     
</>

);

}