// eslint-disable-next-line no-unused-vars
import React from "react";

import { Navigate } from 'react-router-dom'
import { Header } from "../components/Header";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children,isAdmin }) => {

    const user = localStorage.getItem("codeburger:userData")

    if(isAdmin &&!JSON.parse(user).admin){
        return  <Navigate to="/" />
    } 

    return user ? 
    
    <>
    {!isAdmin && < Header/>}
    
    {children}</> : <Navigate to="/login" />

}

export default PrivateRoute