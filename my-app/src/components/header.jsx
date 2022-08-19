import logo from '../icon-left-font-monochrome-white.svg';
import '../App.css';

function Header() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://localhost:3000/login"
          target="_blank"
          rel="noopener noreferrer"
        >
          Connectez-vous ou créer votre compte
        </a>
      </header>
    </div>
  );
}


export default Header;
