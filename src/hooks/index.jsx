// eslint-disable-next-line no-unused-vars
import React from "react";

import { UserProvider } from './UserContext'

// eslint-disable-next-line react/prop-types
const AppProvider = ({ children }) => {
    return (
        <UserProvider>{children}</UserProvider>
    );
}

export default AppProvider;