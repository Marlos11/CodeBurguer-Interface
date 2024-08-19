// eslint-disable-next-line no-unused-vars
import React from "react"
import CartLogo from '../../assets/cart-img.svg'
import { Container, CartImg,Wrapper} from "./styles"
 import { CartItems, CartResume} from "../../components/"
 




export const Cart = () => {


    return (
        <Container>

            <CartImg src={CartLogo} alt="logo-carrinho" />
          
          <Wrapper>
            <CartItems/>
            <CartResume/>

          </Wrapper>
          
        </Container>
    )
}

