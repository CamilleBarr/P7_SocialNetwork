import React from "react";

import ReactDOM from "react-dom";
import { Link, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";

export default function SignUp() {
  const navigate = useNavigate('/userHomepage');
  const emailSignUp = useRef();
  const passwordSignUp = useRef();
  
  const [errorEmail, setErrorEmail] = useState(null);
  
  let emailRegExp = new RegExp('^[a-zA-Z.-_]{3,30}[@]{1}[a-zA-Z.-_]{3,30}[.]{1}[a-z]{2}[^0-9]$');
  let passwordRegExp = new RegExp ('^[A-Za-z0-9]\w{8,}$');

  function emailValidation  (value)  {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
    /*
    if (!emailSignUp.match(emailRegExp) ) {
      setErrorEmail(
        "Veuillez respecter les formats de courriel (example@email.com) et de mot de passe (8 caractères minimum) ."
      );
    } else {
      setErrorEmail(null);
    }*/
  }

  function passValidation  (value) {
    return /^\w+([\.-]?\w{2,3})+$/.test(value);
  }

  function handleChangeEmail(event) {
    if (!emailValidation(event.target.value)) {
      setErrorEmail(
        `Veuillez respecter le format du courriel (example@email.com).`
      );
    } else {
      setErrorEmail(null);
    }
  }
 
  function handleChangePass(event) {
    if (!passValidation(event.target.value)) {
      setErrorEmail(
        `Veuillez respecter le format du mot de passe (8 caractères minimum) .`
      );
    } else {
      setErrorEmail(null);
    }
  }

  function submitAccount(event) {
    event.preventDefault();
    const newEmail = emailSignUp.current.value;
    const newPassword = passwordSignUp.current.value;

    //fetch: send data to API
    const urlUserHomepage = "http://localhost:3000/userHomepage";
    const formData = {
      email: newEmail,
      password: newPassword,
    };
    fetch(urlUserHomepage, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
  }

  return (
    <section className="signIn">
      <h3>Votre première visite sur ce site ? <br />Créer votre compte</h3>

      <form className="signIn__form" >
        <input
          type="email"
          placeholder="Email"
          ref={emailSignUp}
          onChange ={handleChangeEmail }
        />
        {errorEmail && <p>{errorEmail}</p>}
        <input
          type="password"
          placeholder="Mot de passe"
          ref={passwordSignUp}
          onChange={handleChangePass}
        />
        <button className="signIn--button" onSubmit={() => submitAccount} >
          S'inscrire
        </button>
      </form>
    </section>
  );
}