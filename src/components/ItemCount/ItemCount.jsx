/* eslint-disable no-unused-vars */
import React from 'react'
import { useState } from 'react'
import './ItemCount.css'

export default function ItemCount({ stock, initial, onAdd}) {
const [count, setCount]= useState(initial);

  return (
    <div className='itemCount'>
          <button>+</button>
          <h1>{count}</h1>
          <button>-</button>
          <button>Agregar al carrito</button>
    </div>
  )
}



