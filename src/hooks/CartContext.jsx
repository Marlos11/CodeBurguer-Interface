// eslint-disable-next-line no-unused-vars
import React, { createContext, useContext, useState, useEffect } from "react";



const CartContext = createContext({})

// eslint-disable-next-line react/prop-types
export const CartProvider = ({ children }) => {

    const [cartProducts, setCartProducts] = useState([])


    const putProductsInCat = async product => {

        const cartIndex = cartProducts.findIndex(prd => prd.id === product.id)
        let newCartProducts = cartProducts

        if (cartIndex >= 0) {
         
            newCartProducts[cartIndex].quantity =
                newCartProducts[cartIndex].quantity + 1
            setCartProducts(newCartProducts)
        } else {
            product.quantity = 1
            newCartProducts = [...cartProducts, product]
            setCartProducts(newCartProducts)
           

        }

        await localStorage.setItem('codeburguer:cartInfo', JSON.stringify(newCartProducts))
    }


    useEffect(() => {

        const loadUserData = async () => {
           
            const clientCartData = await localStorage.getItem('codeburger:cartInfo')

            if (clientCartData) {
                setCartProducts(JSON.parse(clientCartData))
            }
      
        }

        loadUserData()
    }, [])

    return (
        <CartContext.Provider value={{ putProductsInCat, cartProducts }}>
            {children}
        </CartContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => {
    const context = useContext(CartContext)

    if (!context) {
        throw new Error('useCart must be used with CartContext')
    }

    return context
}

