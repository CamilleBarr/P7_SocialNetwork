import React from 'react';
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

function Home () {
    const logo = "../icon-left-font-monochrome-black.png";
    
    
    return (
    <>
        <div /*className="App"*/>
            <img src={logo} /*className="App-logo"*/ alt="logo Groupomanianoir sur fond blanc" />
        </div>
        <div>
            <h2>Bienvenue sur votre réseau professionnel</h2>

                <p>
                Si vous êtes nouveau sur ce réseau, merci de
                    <span className="input-group-btn">
                        <Link to="/signup">
                        Créer votre compte
                        </Link>
                    </span>
                </p>
                <p>
                autrement, veuillez-vous
                    <span className="button">
                        <Link to="/login">
                            Connecter
                        </Link>
                    </span>
                </p>
            </div>
        </>
    )
}
export default Home