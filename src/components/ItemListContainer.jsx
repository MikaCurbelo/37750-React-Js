import React from 'react'
import './Greeting.css'

export default function ItemListContainer({cartelBienvenida}) {
  return <div >
    <h2 className='fontGreeting colorGreeting'>{cartelBienvenida}</h2>
  </div>
}
