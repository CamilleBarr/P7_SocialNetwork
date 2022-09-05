import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {ROOT_PATH_URL} from './server.config';

export default function LogOrSign() {
    
const [token, setToken] = useState({})
const [userId, setUserId] = useState({})
const [name, setName] = useState({})
const [lSGet, setLSGet] = useState(JSON.parse(localStorage.getItem("LS")) || false);
    
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

    function ConnexionClick(e) {
        e.preventDefault();
        fetch(`${ROOT_PATH_URL}/login`, {
            method: "POST",
            headers: { 
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({email, password}),
            })
            .then((res)=>{
                if(res.status===200) {
                    console.log("Ok");
                return res.json();
                } else if(res.status===400) {
                    alert('E-mail ou mot de passe invalide');
                }
                return Promise.reject();                
            })
            .then((res)=>{
                console.log('res',res)
                if(res) {
                    localStorage.setItem('email', res.email);
                    localStorage.setItem('userId', res.userId);
                    localStorage.setItem('token', res.token);

                    
                    navigate('/homePage');
                }

            })
            .catch((err)=>{
                // afficher une erreur dans la console 
                console.log(err)
        })
    }

    function DisconnectClick(e) {
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
                    
                        navigate('/homePage');
                    }
                    if(res === 400){
                        alert('Utilisateur existant');
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
        <div>
            {/* {
                hasAccount === true
                ? */}<div>
                    <h2>Déjà inscrit ? Veuillez vous identifier</h2>
                    <form method='post'>
                        <label htmlFor='mail'>Email</label>
                        <input type='text' id='mail' name='mail' value={email} required onChange={(e) => setEmail(e.target.value)}/>
                        <label htmlFor='password'>Mot de passe</label>
                        <input type='password' id='password' name='password' value={password} required onChange={(e) => setPassword(e.target.value)}/>
                        <input type='submit' value='Connexion' onClick={ConnexionClick}/>
                    </form>
                </div>
                {/* : 
                <div>
                    <h2>Veuillez vous inscrire</h2>
                    <form method='post'>
                        <label htmlFor='mail'>Email</label>
                        <input type='text' className='mail' name='mail' required onChange={(e) => setEmail(e.target.value)}/>
                        <label htmlFor='password'>Mot de passe</label>
                        <input type='password' name='password' required onChange={(e) => setPassword(e.target.value)}/>
                        <input type='submit' value='Connexion' onClick={DisconnectClick}/>
                    </form>
                </div>
            {/* } */}
        </div>
    )
}