import { ButtonAction } from "./styles"
import PropTypes from 'prop-types'

const Button =({children,...rest})=>{
   
   console.log(rest,children)
   return <ButtonAction {...rest}>{children}
    </ButtonAction>
}

export default Button