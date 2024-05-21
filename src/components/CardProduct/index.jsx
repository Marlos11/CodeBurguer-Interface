/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Button } from '../Button'

import { useCart } from "../../hooks/CartContext";


import { Conteiner, Image, ProductName, ProductPrice } from "./styles";
import formatCurrency from "../../utils/formatCurrency";

export const CardProducts = ({ product }) => {
    const { putProductsInCat } = useCart()
    return (
        <Conteiner >
            <Image src={product.url} alt="imagem do produto" />
            <div>
                <ProductName>{product.name}</ProductName>
                <ProductPrice>{formatCurrency(product.price)}</ProductPrice>
                <Button onClick={() => putProductsInCat(product)}>Adicionar</Button>

            </div>
        </Conteiner>
    )
}



