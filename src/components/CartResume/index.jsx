// eslint-disable-next-line no-unused-vars
import React from "react"

import { Container } from "./styles"
import { Button } from '../Button'






export const CartResume = () => {


  return (
    <div>
      <Container>
        <div className="container-top">
          <h2 className="title">Resumo Do Pedido </h2>
          <p className="items">Itens</p>
          <p className="items-price">R$ 10,00</p>
          <p className="delivery-taxa">Taxa De Entrega </p>
          <p className="delivery-price">R$ 10,00</p>
        </div>

        <div className="container-bottom">
          <p>Total</p>
          <p>R$:20,00 </p>
        </div>

      </Container>

      <Button style={{ with: '100%', marginTop: 30 }}>
        Finalizar Pedido
      </Button>
    </div>
  )
}

