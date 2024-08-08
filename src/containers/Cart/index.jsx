// eslint-disable-next-line no-unused-vars
import React from "react"
import CartLogo from '../../assets/cart-img.svg'
import { Container, CartImg} from "./styles"
 import { CartItems} from "../../components/"
 




export const Cart = () => {


    return (
        <Container>

            <CartImg src={CartLogo} alt="logo-carrinho" />
            <CartItems/>
          
        </Container>
    )
}

