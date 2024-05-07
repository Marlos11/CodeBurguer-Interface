/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Button from '../Button'


import { Conteiner, Image, ProductName, ProductPrice } from "./styles";
import formatCurrency from "../../utils/formatCurrency";

const CardProducts = ({ product }) => {
    console.log(product)
    return (
        <Conteiner >
            <Image src={product.url} alt="imagem do produto" />
            <div>
                <ProductName>{product.name}</ProductName>
                <ProductPrice>{formatCurrency(product.price)}</ProductPrice>
                <Button>Adicionar</Button>

            </div>
        </Conteiner>
    )
}
export default CardProducts


