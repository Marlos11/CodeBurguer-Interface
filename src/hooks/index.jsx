// eslint-disable-next-line no-unused-vars
import React from "react";

import { UserProvider } from './UserContext'
import { CartProvider } from "./CartContext";

// eslint-disable-next-line react/prop-types
const AppProvider = ({ children }) => {
    return (

        <CartProvider>

            <UserProvider>{children}</UserProvider>
        </CartProvider>
    );
}

export default AppProvider;