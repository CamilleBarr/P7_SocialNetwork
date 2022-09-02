import React from "react";

import LogOrSign from '../components/logOrSign';


export default function Login () {

/*

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



export default function Login() {
  const navigate = useNavigate();

  const inputLogIn = useRef([])
  const addInputLogIn = (el) => {
    inputLogIn.current.push(el)
  }

  let [token, setToken] = React.useContext(TokenContext);
  let [userId, setUserId] = React.useContext(IdContext);
  let [name, setName] = React.useContext(NameContext);

  setToken(undefined);
  setUserId('');

  const handleForm = (event) => {
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
      'http://localhost:3000/auth/login',
      requestOptions
    )
      .then((res) => res.json())
      .then((data) => {
        setToken(data.token);
        setUserId(data.userId);
        setName(data.name);
        navigate('/homepage')
      })
      .catch(function (error) {
        navigate('/')
      })

*/

    return (
      <>
        <LogOrSign />
      </>

    )

  }
/* <h3>Vous avez déjà enregistré votre profil ? <br />Connectez-vous</h3>
        
<form className="signIn__form" onSubmit={handleForm}>
        <input type="email" name="emailLogIn" placeholder="Email" ref={addInputLogIn}/>
        <input type="password" name="passwordLogIn" placeholder="Mot de passe" ref={addInputLogIn} />
        <input type="submit" className="signIn--button" value=" Se connecter"/>
      </form>
     
</> */