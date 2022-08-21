import React from'react';
import { Link } from 'react-router-dom';
import logo from '../icon-left-font-monochrome-white.svg';
//import '../App.css';

function Header() {
  return (

<div className='container'>

<h1>Home </h1>

<p>

  <Link to='/lohin'>Your desired link.</Link>

</p>

</div>

)

    //<div /*className="App"*/>
      //<header /*</div>className="App-header"*/>
        //<img src={logo} /*className="App-logo"*/ alt="logo" />
        /*<p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://localhost:3000/login"
          target="_blank"
          rel="noopener noreferrer"
        >
          Connectez-vous
        </a>
        <a
          className="App-link"
          href="https://localhost:3000/login"
          target="_blank"
          rel="noopener noreferrer"
        >
          Créer votre compte
        </a>
      </header>
    </div>*/
  //)
}


export default Header;
