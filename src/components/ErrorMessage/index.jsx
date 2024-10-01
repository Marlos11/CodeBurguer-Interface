// eslint-disable-next-line no-unused-vars
import React from "react"
import PropTypes from "prop-types";

import { ErrorsMessage } from './styles'

export const ErrorMessage = ({ children }) => {
    return (
        <ErrorsMessage>
            {children}
        </ErrorsMessage>
    );
}

export default ErrorMessage;

ErrorMessage.propTypes = {
    children: PropTypes.string
}