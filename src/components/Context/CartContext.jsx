import React, {createContext, useState} from "react"


export const CartContext = createContext(null);

const CartProvider = (Props) => {

    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)


    const addToCart = (nombre, count ) => {

        if(cart.some(el => el.id === nombre.id)){
            let index = cart.findIndex(el => el.id === nombre.id);
            let product= cart[index];
            product.count = product.count + count;

            const newCart = [...cart];
            newCart.splice( index , 1 , product);

            setCart([...newCart]);
        }else{
            let product = {...nombre, count};
            setCart([...cart, product ]);
        }
    };

    const deleteCart = () =>{
        setCart([]);
    }




    

    return(
        <CartContext.Provider 
            value={{
                cart, 
                setCart,
                addToCart,
                deleteCart,
                }}>
        {Props.children}
        </CartContext.Provider> 
    )

}

export default CartProvider;






































/* import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'
import { Item } from '../ItemListContainer/Item';



export const myContext = createContext();

const cartStart = [];
 
export default function CartContext({children}) {
    
    const [Cart, setCart] = useState(cartStart);

    const addToCart = () => {
        setCart([...Cart, ])
    };

    const isInCart = (Item) => {
        return Cart.some( (prod) => prod.Id === Item.Id)
    };

    const removeToCart = () => { 
        const newCart = Cart.filter((prod) => prod.Id !==Item.Id)
        setCart(newCart)
    };

    const clearCart = () => {
        setCart([])
    }

  return <><myContext.Provider value={{Cart,  addToCart, isInCart, removeToCart, clearCart}}>{children}</myContext.Provider>
    </>
}
 */