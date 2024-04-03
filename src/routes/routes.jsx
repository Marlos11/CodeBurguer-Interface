import React from "react";

import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import Login from '../containers/Login'
import Register from '../containers/Register'
import Home from '../containers/Home'


const MyRoutes = () => {

    return (
        <Router>
            <Routes>
                <Route element={<Login />} path="/login" />
                <Route element={<Register />} path="/cadastro" />
                <Route element={<Home />} path="/" />
            </Routes>
        </Router>
    )


}

export default MyRoutes 