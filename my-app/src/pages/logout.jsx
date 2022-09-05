import React, {useState} from "react";
import { useNavigate } from 'react-router-dom'

export default function Logout() {
    const [token, setToken] = useState({})
    const [userId, setUserId] = useState({})

    const navigate = useNavigate();

    function disconnect(e) {

        setToken(undefined)
        setUserId('')
        navigate('/')
    }

return (
    <header className="header">
        
        <div className="displayHeaderLeft"></div>
        <div className="displayButtonLogout">

        {token === undefined && userId === '' ?
            '' : 
            <button
                onClick={disconnect}
                className="buttonLogout"
                size="3x"
            >Se déconnecter</button>
        }

        </div>
    </header>
)
}