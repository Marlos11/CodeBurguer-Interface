// eslint-disable-next-line no-unused-vars
import React from "react";

import { UserProvider } from './UserContext'
import { CartProvider } from './CartContext';

// eslint-disable-next-line react/prop-types
const AppProvider = ({ children }) =>
(

    <UserProvider>
        <CartProvider>   {children} </CartProvider>

    </UserProvider>

);


export default AppProvider;