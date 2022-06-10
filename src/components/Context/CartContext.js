import React, { createContext, useState } from "react";

const CartContext = createContext()

const CartProvider = ({children}) => {
    const [cartListItems, setCartListItems] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    
    

    const addProductToCart = (products) => {
        let productsInCart = cartListItems.find(cartItem => cartItem.id === products.id)
        if(!productsInCart) {
            console.log("se agrego el producto:", products)
            setTotalPrice(totalPrice + products.price)
        
            return setCartListItems(cartListItems => [...cartListItems, products])
        }
        
    }

    const data = {
        cartListItems,
        addProductToCart,
        totalPrice
    }

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )

    }

export { CartContext, CartProvider }