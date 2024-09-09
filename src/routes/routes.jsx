// eslint-disable-next-line no-unused-vars
import React from "react";
import { Routes, Route, BrowserRouter as Router, } from "react-router-dom";


import { Login, Home, Register, Products, Cart } from '../containers'
import PrivateRoute from "./private-routes";
import { Admin } from "../containers/Admin";






const MyRoutes = () => {


    return (
        <Router>
            <Routes>






                <Route element={<Login />} path="/login" />
                <Route element={<Register />} path="/cadastro" />

                <Route path="/" element={<PrivateRoute> <Home /> </PrivateRoute>} />
                <Route path="/produtos" element={<PrivateRoute> <Products /> </PrivateRoute>} />
                <Route path="/carrinho" element={<PrivateRoute> <Cart /> </PrivateRoute>} />
                <Route path="/pedidos" element={<PrivateRoute isAdmin> <Admin /> </PrivateRoute>}  />



            </Routes>
        </Router>
    )


}

export default MyRoutes


