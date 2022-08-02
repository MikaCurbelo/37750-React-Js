import React, { useContext } from 'react'
import { myContext } from '../Context/CartContext'

export const Cart = (props) => {
 
const {cart} = useContext(myContext)

  return (

    <div> {cart.map(item => ( 
    
      <div> 
      nombre: {item.nombre} 
      descripcion: {item.descripcion}
      <img src={item.imgUrl} alt="foto de producto"/> 
      total: {item.precio * item.cantidad}

      </div>
        ))}
    </div>
  )
}
