// eslint-disable-next-line no-unused-vars
import React from "react"
import { ButtonAction } from "./styles"
/* import PropTypes from 'prop-types' */

// eslint-disable-next-line react/prop-types
export const Button =({children,...rest})=>{
   
   
   return <ButtonAction {...rest}>{children}</ButtonAction>
}

 