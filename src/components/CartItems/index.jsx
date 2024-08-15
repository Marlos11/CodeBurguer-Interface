// eslint-disable-next-line no-unused-vars
import React from "react"

import { Container, Header, Body } from "./styles"
import  {useCart}  from "../../hooks/CartContext"
import formatCurrency from "../../utils/formatCurrency"




export const CartItems = () => {

    const {cartProducts  } = useCart() 
    console.log(cartProducts)
    
  
    return (
        <Container>

           <Header>
                <p></p> 
                <p>Itens</p>
                <p>Preço</p>
                <p>Quantidade </p>
                <p>Total</p>
            </Header> 

           {cartProducts &&  cartProducts.map(product => (
                
                <Body key={product.id}>
                    <img src={product.url} alt="imagem-produtos" />
                    <p>{product.name}</p>
                    <p>{formatCurrency(product.price)}</p>
                    <p>{product.quantity}</p>
                    <p>{formatCurrency(product.quantity * product.price)}</p>
                   

                </Body>
                
            ))} 
            


        </Container>
    )
}

