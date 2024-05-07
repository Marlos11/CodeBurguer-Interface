// eslint-disable-next-line no-unused-vars
import React, { createContext, useContext, useState, useEffect } from "react";


const UserContext = createContext({})

// eslint-disable-next-line react/prop-types
export const UserProvider = ({ children }) => {

    const [userData, setUserData] = useState({})

    const putUserData = async userInfo => {
        setUserData(userInfo)

        await localStorage.setItem('codeburger:userData', JSON.stringify(userInfo))
    }

    useEffect(() => {

        const loadUserData = async () => {
            const clientInfo = await localStorage.getItem('codeburger:userData')

            if(clientInfo){
                setUserData(JSON.parse(clientInfo))
            }
           
        }

        loadUserData()
    }, [])

    return (
        <UserContext.Provider value={{ putUserData, userData }}>
            {children}
        </UserContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useUser = () => {
    const context = useContext(UserContext)

    if (!context) {
        throw new Error('useUser must be used with userContext')
    }

    return context
}

