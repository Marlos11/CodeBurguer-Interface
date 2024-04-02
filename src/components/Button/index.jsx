import { ButtonAction } from "./styles"
import PropTypes from 'prop-types'

const Button =({children,...rest})=>{
   
   
   return <ButtonAction {...rest}>{children}
    </ButtonAction>
}

export default Button