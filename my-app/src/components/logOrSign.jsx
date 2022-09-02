import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function LogOrSign() {
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
        fetch("http://localhost:3000/login", {
            method: "POST",
            headers: { 
            'Accept': 'application/json', 
            'Content-Type': 'application/json' 
            },
            body: JSON.stringify({email, password}),
            })
            .then(function(res){
                if(res.ok){
                console.log("Ok");
                return res.json();
                }
                else{
                    alert('E-mail ou mot de passe invalide');
                }
            })
            .then(function(reponse){
                localStorage.setItem('token', reponse.token);
                localStorage.setItem('userId', reponse.userId);
                navigate('/homePage');
            })
            .catch(function(err){
                // afficher une erreur dans la console 
                console.log(err)
        })
    }

    function SignupClick(e) {
        if(email.match(/^[a-zA-Z\0-9\é\ê\è\-]+[@]+[a-zA-Z\0-9\é\ê\è\-]+[.]+[a-zA-Z]+$/)){
            e.preventDefault();
            fetch("http://localhost:3000/signup", {
                method: "POST",
                headers: { 
                'Accept': 'application/json', 
                'Content-Type': 'application/json' 
                },
                body: JSON.stringify({email, password}),
                })
                .then(function(res){
                    if(res.ok){
                        console.log("Ok");
                        return res.json();
                    }
                    else{
                        return res.status;
                    }
                })
                .then(function(res){
                    if(res === 400){
                        alert('Utilisateur existant');
                    }
                    else{
                        localStorage.setItem('userId', res.userId);
                        localStorage.setItem('token', res.token);
                        navigate('/homePage');
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
        <div>
            {
                hasAccount === true
                ?<div>
                    <h2>Veuillez vous identifier</h2>
                    <form method='post'>
                        <label for='mail'>Email</label>
                        <input type='text' id='mail' name='mail' value={email} required onChange={(e) => setEmail(e.target.value)}/>
                        <label for='password'>Mot de passe</label>
                        <input type='password' id='password' name='password' value={password} required onChange={(e) => setPassword(e.target.value)}/>
                        <input type='submit' value='Connexion' onClick={ConnexionClick}/>
                    </form>
                </div>
                :<div>
                    <h2>Veuillez vous inscrire</h2>
                    <form method='post'>
                        <label for='mail'>Email</label>
                        <input type='text' className='mail' name='mail' required onChange={(e) => setEmail(e.target.value)}/>
                        <label for='password'>Mot de passe</label>
                        <input type='password' name='password' required onChange={(e) => setPassword(e.target.value)}/>
                        <input type='submit' value='Connexion' onClick={SignupClick}/>
                    </form>
                </div>
            }
        </div>
    )
}