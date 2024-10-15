// eslint-disable-next-line no-unused-vars
import React from "react";
import { Routes, Route, BrowserRouter as Router, } from "react-router-dom";


import { Login, Home, Register, Products, Cart } from '../containers'
import PrivateRoute from "./private-routes";
import { Admin } from "../containers/Admin";
import paths from "../constants/paths";






const MyRoutes = () => {


    return (
        <Router>
            <Routes>






                <Route element={<Login />} path="/login" />
                <Route element={<Register />} path="/cadastro" />

                <Route path="/" element={<PrivateRoute> <Home /> </PrivateRoute>} />
                <Route path="/produtos" element={<PrivateRoute> <Products /> </PrivateRoute>} />
                <Route path="/carrinho" element={<PrivateRoute> <Cart /> </PrivateRoute>} />
                <Route path={paths.Order} element={<PrivateRoute isAdmin> <Admin /> </PrivateRoute>}  />
                <Route path={paths.ProductsList} element={<PrivateRoute isAdmin> <Admin /> </PrivateRoute>}  />
                <Route path={paths.NewProduct} element={<PrivateRoute isAdmin> <Admin /> </PrivateRoute>}  />
                <Route path={paths.EditProduct} element={<PrivateRoute isAdmin> <Admin /> </PrivateRoute>}  />



            </Routes>
        </Router>
    )


}

export default MyRoutes


