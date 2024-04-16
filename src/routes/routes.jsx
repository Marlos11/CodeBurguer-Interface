import React from "react";
import { Routes, Route, BrowserRouter as Router, } from "react-router-dom";


import Login from '../containers/Login'
import Register from '../containers/Register'
import Home from '../containers/Home'
import PrivateRoute from "./private-routes";






const MyRoutes = () => {


    return (
        <Router>
            <Routes>


              
                <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
                <Route element={<Login />} path="/login" />
                <Route element={<Register />} path="/cadastro" />

            </Routes>
        </Router>
    )


}

export default MyRoutes


