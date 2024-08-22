// eslint-disable-next-line no-unused-vars
import React from "react";

import { Navigate } from 'react-router-dom'
import { Header } from "../components/Header";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {

    const user = localStorage.getItem("codeburger:userData")

    return user ? <>
    <Header/>
    {children}</> : <Navigate to="/login" />
}

export default PrivateRoute