import React, { createContext, useState } from "react";

export const MixDataContext = createContext({});

export const MixDataProvider = ({ children }) => {
   

    const [token, setToken] = useState()
    const [userId, setUserId] = useState()
    const [name, setName] = useState()

    // useEffect(() => {
    //     fetch(`http://localhost:3000/api/user/${userId}`)
    //         .then((res) => {
    //             console.log(res.data)
    //             //setDataUserId(res.data.id)
    //             setDataUser(res.data)
    //         })
    // }, [])

    return (
        <MixDataContext.Provider value={{
            token, userId, name
        }}>
            {children}
        </MixDataContext.Provider>
    )
}



export default MixDataProvider;