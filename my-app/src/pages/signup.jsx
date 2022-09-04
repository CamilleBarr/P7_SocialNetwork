import React from "react";
import { useRef, useState, } from "react";
import { useNavigate  } from "react-router-dom";
import { TokenContext } from '../App'
import { IdContext } from '../App'

import Login from './login';
export default function SignUp() {
/*

  const Navigate = useNavigate();
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

// const handleForm = (event, props) => {
//   event.preventDefault();
//   const email = inputSignUp.current[0];
//   const password = inputSignUp.current[1];

//   const requestOptions = {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//         Accept: 'application/json',
//     },
//     body: JSON.stringify({
//         email: email.value,
//         password: password.value,
//     }),
// }
// fetch(
//     'http://localhost:3001/signup',
//     requestOptions
// )
//     .then((res) => res.json())
//     .then((data) => {
//         setSignUp(false)
//       })
// }
*/
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');
  const navigate = useNavigate();
  let url = new URL(window.location.href);
  let hasAccount = undefined;
  if(url.pathname === '/login'){
      hasAccount = true
  }
  else{
      hasAccount = false
  }


function SignupClick(e) {
  if(email.match(/^[a-zA-Z\0-9\é\ê\è\-]+[@]+[a-zA-Z\0-9\é\ê\è\-]+[.]+[a-zA-Z]+$/)){
      e.preventDefault();
      fetch("http://localhost:3000/signup", {
          method: "POST",
          headers: { 
          'Content-type': 'application/json' 
          },
          body: JSON.stringify({email, password}),
          })
          .then((res)=>{
            console.log('res', res)
            if(res.status === 201) {
                localStorage.setItem('userId', res.userId);
                localStorage.setItem('token', res.token);
            
                navigate('/login');
            }  else if(res.status === 400){
                alert('Utilisateur existant');
            } else {
                alert('other error')
            }
        })
          .catch(function(err){
              // afficher une erreur dans la console 
              console.log(err)
      })
  }
  else{
      e.preventDefault();
      alert('Rentrez une adresse mail valide')
  }
}


  return (
<>
{
                <div>
                    <h2>Veuillez vous inscrire</h2>
                    <form method='post'>
                        <label type="email" htmlFor='mail'>Email</label>
                        <input type='text' className='mail' name='mail' required onChange={(e) => setEmail(e.target.value)}/>
                        <label htmlFor='password'>Mot de passe </label>
                        <input type='password' name='password' required onChange={(e) => setPassword(e.target.value)}/>
                        <input type='submit' value='Connexion' onClick={SignupClick}/>
                    </form>
                </div>
            }
</>
  )
          }

  //   <section className="signUp">
  //     <h3>Votre première visite sur ce site ? <br />Créer votre compte</h3>

  //     <form className="signUp__form" onSubmit={() =>Navigate('./homepage')} >
  //       <input
  //         type="email"
  //         name="emailSignUp"
  //         placeholder="Email"
  //         ref={addInputSignUp}
  //       />
  //       {errorEmail && <p>{errorEmail}</p>}
  //       <input
  //         type="password"
  //         name="passwordSignUp"
  //         placeholder="Mot de passe"
  //         ref={addInputSignUp}
  //       />
  //       <input type = "submit" className="signUp--button" value="S'inscrire" />
          
        
  //     </form>
  //   </section>
  // );
