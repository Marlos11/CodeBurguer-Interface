import React, { createContext, useContext } from "react";


const UserContext = createContext({})

export const UserProvider = ({ children }) => {
    const user = {
        name: 'Marlos',
        age: 26
    }
    const otherUser = {
        name: 'carlos',
        age: 29
    }

    return (
        <UserContext.Provider value={{ user, otherUser }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => {
    const context = useContext(UserContext)

    if (!context) {
        throw new Error('useUser must be used with userContext')
    }

    return context
}

