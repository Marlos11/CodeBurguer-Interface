// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react"
import formatCuerrency from '../../utils/formatCurrency'
import { useCart } from "../../hooks/CartContext"
import api from '../../services/api'

import { Container } from "./styles"
import { Button } from '../Button'
import { toast } from "react-toastify"






export const CartResume = () => {
  const [finalPrice, setFinalPrice] = useState(0)
  const [deliveryTax] = useState(5)

  const { cartProducts } = useCart()

  useEffect(() => {

    const sumAllItems = cartProducts.reduce((acc, crr) => {
      return crr.price * crr.quantity + acc
    }, 0)

    setFinalPrice((sumAllItems))
  }, [cartProducts, deliveryTax])


  const submitOrder = async () => {
    const order = cartProducts.map(product => {
      return { id: product.id, quantity: product.quantity }
    })

    await toast.promise(api.post('orders3', { products: order }),{
      pending:'Realizando o seu pedido ',
      success:'Pedido realizado com seucesso',
      error:'Falha ao tentar realizar  o seu pedido, tente novamente '
    })
  
  }
  



     
  return (
    <div>
      <Container>
        <div className="container-top">
          <h2 className="title">Resumo Do Pedido </h2>
          <p className="items">Itens</p>
          <p className="items-price">{formatCuerrency(finalPrice)}</p>
          <p className="delivery-taxa">Taxa De Entrega </p>
          <p className="delivery-price">{formatCuerrency(deliveryTax)}</p>
        </div>

        <div className="container-bottom">
          <p>Total</p>
          <p>{formatCuerrency(finalPrice + deliveryTax)}</p>
        </div>

      </Container>

      <Button style={{ with: '100%', marginTop: 30 }} onClick={submitOrder}>
        Finalizar Pedido
      </Button>
    </div>
  )
}

