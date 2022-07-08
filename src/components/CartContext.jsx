import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'
import { Item } from './ItemListContainer/Item';


export const myContext = createContext(null);

const cartStart = [];
 
export default function CartContext({children}) {
    
    const [Cart, setCart] = useState(cartStart);

    const addToCart = (Item) => {
        setCart([...Cart, Item])
    };

    const isInCart = () => {
        return Cart.some( (prod) => prod.Id === Item.Id)
    };

    const removeToCart = () => { 
        const newCart = Cart.filter((prod) => prod.Id !==Item.Id)
        setCart(newCart)
    };

    const clearCart = () => {
        setCart([])
    }

  return <><myContext.Provider value={{Cart, addToCart, isInCart, removeToCart, clearCart }}>{children}</myContext.Provider>
    </>
}
