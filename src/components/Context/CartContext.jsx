import React, { useEffect } from 'react'
import { useState } from 'react';
import { createContext } from 'react'
import { Item } from '../ItemListContainer/Item';



export const myContext = createContext(null);
const cartStart = [];

 
export default function CartContext({ children }) {
    
    const [Cart, setCart] = useState(cartStart);

    useEffect(() => {
      console.log(Cart)
    }, [Cart])
    

    const addToCart = (Item, count) => {
        console.log(Item.id)
        if(isInCart(Item.id)){

            const productoAgregado = Cart.map((prod)=>prod.id === Item.id? {...prod, cantidad:prod.count + count} : prod)
            setCart([...productoAgregado])
        }else{
            setCart([...Cart, {...Item, "cantidad": count}])
            alert("Se agregaron " + JSON.stringify(count)+ " " + JSON.stringify(Item.nombre))
        }
     
    };
    const isInCart = (id) => {
        return Cart.some( (prod) => prod.id === id)
    };
    const removeToCart = () => { 
        const newCart = Cart.filter((prod) => prod.id !== Item.id)
        setCart(newCart)
    };
    const clearCart = () => {
        setCart([])
    }
  return <><myContext.Provider 
        value={{
                Cart, 
                addToCart, 
                isInCart, 
                removeToCart, 
                clearCart }}>
        {children}
        </myContext.Provider>
    </>
}
