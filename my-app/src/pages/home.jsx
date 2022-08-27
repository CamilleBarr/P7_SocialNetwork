import React from 'react';
import { useState } from 'react';
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import Login from './login';
import SignUp from './signup';

function Home() {
    const logo = "../icon-left-font-monochrome-black.png";
    const navigate = useNavigate();
    const [isShown, setIsShown] = useState(false);
   let button = "vous connecter";


    const showOnClick = event => {
        // 👇️ toggle shown state
        setIsShown(current => !current);

button = "se déconnecter"

        // 👇️ or simply set it to true
        // setIsShown(true);
    };

    return (
/*<>

</>*/
        <>
            <div>
                <span className="input-group-btn">
                    <button onClick={showOnClick}>
                        {button}
                    </button>
                </span>
            </div>
            {isShown && (<SignUp />)
            }
            {isShown && (<Login />)
            }
        </>
    )
}
export default Home