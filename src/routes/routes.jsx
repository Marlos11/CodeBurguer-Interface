// eslint-disable-next-line no-unused-vars
import React from "react";
import { Routes, Route, BrowserRouter as Router, } from "react-router-dom";


import { Login, Home, Register, Products,Cart } from '../containers'
import PrivateRoute from "./private-routes";






const MyRoutes = () => {


    return (
        <Router>
            <Routes>



                <Route path="/" element={<PrivateRoute> <Home /> </PrivateRoute>} />
                <Route path="produtos" element={<PrivateRoute> <Products /> </PrivateRoute>} />
                <Route element={<Login />} path="/login" />
                <Route element={<Register />} path="/cadastro" />
                <Route element={<Cart />} path="/carrinho" />

            </Routes>
        </Router>
    )


}

export default MyRoutes


