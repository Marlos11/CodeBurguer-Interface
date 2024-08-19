// eslint-disable-next-line no-unused-vars
import React, { createContext, useContext, useState, useEffect } from "react";



const CartContext = createContext({})

// eslint-disable-next-line react/prop-types
export const CartProvider = ({ children }) => {

    const [cartProducts, setCartProducts] = useState([])

    const updateLocalStorage = async product => {
        localStorage.setItem('codeburguer:cartInfo', JSON.stringify(product))
    }


    const putProductsInCat = async product => {
        console.log(product)

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

        await updateLocalStorage(newCartProducts)
    }


    const deleteProducts = async productId => {
        const newCart = cartProducts.filter(product => product.id != productId)

        setCartProducts(newCart)
        await updateLocalStorage(newCart)

    }


    const incraseProducts = async productId => {
        const newCart = cartProducts.map(product => {
            return product.id === productId ? { ...product, quantity: product.quantity + 1 }
                : product
        })

        setCartProducts(newCart)

        await updateLocalStorage(newCart)
    }





    const decreaseProducts = async productId => {

        const cartIndex = cartProducts.findIndex(prd => prd.id === productId)

        if (cartProducts[cartIndex].quantity > 1) {

            const newCart = cartProducts.map(product => {
                return product.id === productId ? { ...product, quantity: product.quantity - 1 }
                    : product
            })
            setCartProducts(newCart)

            await updateLocalStorage(newCart)
        } else {
            deleteProducts(productId)
        }



    }









    useEffect(() => {

        const loadUserData = async () => {

            const clientCartData = await localStorage.getItem('codeburguer:cartInfo')

            if (clientCartData) {
                setCartProducts(JSON.parse(clientCartData))
            }

        }

        loadUserData()
    }, [])

    return (
        <CartContext.Provider value={{ putProductsInCat, cartProducts, incraseProducts, decreaseProducts }}>
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

