import React from "react";
import { useState, } from "react";
import { useNavigate  } from "react-router-dom";
import {ROOT_PATH_URL} from '../components/server.config';

export default function SignUp() {

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
        fetch(`${ROOT_PATH_URL}/signup`, {
            method: "POST",
            headers: { 
            'Content-Type': 'application/json' 
            },
            body: JSON.stringify({email, password}),
            })
            .then((res)=>{
                if(res.ok){
                    console.log("Ok");
                    navigate('/login');
                    return res.json();
                }
                else{
                    return res.status;
                }
            })
            .then((res)=>{
                if(res=== 200) {
                    localStorage.setItem('userId', res.userId);
                    localStorage.setItem('token', res.token);
                    localStorage.setItem('isAdmin', res.isAdmin);
                
                    navigate('/login');
                }
                if(res === 400){
                    alert('Utilisateur existant.');
                    navigate('/login');
                }
            })
            .catch((err)=>{
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
