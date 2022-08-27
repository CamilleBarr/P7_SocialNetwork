import React, { createContext, useState, useEffect, useContext } from "react";

export const MixDataContext = createContext({});

export const MixDataProvider = ({ children }) => {

    const [dataUser, setDataUser] = useState([])
    const LStoken = localStorage.getItem('token')
    const userId = localStorage.getItem('id')
    const [dataUserId, setDataUserId] = useState('')
    // const isModeraror = localStorage.getItem('moderator')

    useEffect(() => {
        fetch(`http://localhost:3000/api/user/${userId}`)
            .then((res) => {
                console.log(res.data)
                setDataUserId(res.data.id)
                setDataUser(res.data)
            })
    }, [])

    return (
        <MixDataContext.Provider value={{
            dataUser, LStoken, userId, dataUserId
        }}>
            {children}
        </MixDataContext.Provider>
    )
}



//export default DataContext;