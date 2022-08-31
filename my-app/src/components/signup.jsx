import React from "react";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { TokenContext } from '../App'
import { IdContext } from '../App'

export default function SignUp() {
  const navigate = useNavigate();
  const emailSignUp = useRef();
  const passwordSignUp = useRef();

  const [signUp, setSignUp] = useState(true)
  
  const [errorEmail] = useState(null);

  const inputSignUp = useRef([])
  const addInputSignUp = (el) => {
      inputSignUp.current.push(el)
  }

let [token, setToken] = React.useContext(TokenContext);
let [userId, setUserId] = React.useContext(IdContext);

setToken(undefined);
setUserId('');

const handleForm = (event, props) => {
  event.preventDefault();
  const email = inputLogIn.current[0];
  const password = inputLogIn.current[1];

  const requestOptions = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
    body: JSON.stringify({
        email: email.value,
        password: password.value,
    }),
}
fetch(
    'http://localhost:3000/auth/signup',
    requestOptions
)
    .then((res) => res.json())
    .then((data) => {
        setSignUp(false)
      })
}

  return (
    <section className="signUp">
      <h3>Votre première visite sur ce site ? <br />Créer votre compte</h3>

      <form className="signUp__form" >
        <input
          type="email"
          name="emailSignUp"
          placeholder="Email"
          ref={addInputSignUp}
        />
        {errorEmail && <p>{errorEmail}</p>}
        <input
          type="password"
          name="passwordSignUp"
          placeholder="Mot de passe"
          ref={addInputSignUp}
        />
        <input type = "submit" className="signUp--button" value="S'inscrire" />
          
        
      </form>
    </section>
  );
}