import React, { createContext, useState } from "react";

const MixDataContext = createContext({});

export const MixDataProvider = ({ children }) => {
   

    const [token, setToken] = useState({})
    const [userId, setUserId] = useState({})
    const [name, setName] = useState({})
    const [lSGet, setLSGet] = useState(JSON.parse(localStorage.getItem("LS")) || false);

    return (
        <MixDataContext.Provider value={{
            token, setToken, userId, setUserId, name, setName,lSGet, setLSGet
        }}>
            {children}
        </MixDataContext.Provider>
    )
}
export default MixDataProvider;