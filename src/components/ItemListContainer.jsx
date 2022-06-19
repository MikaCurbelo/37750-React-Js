import React from 'react'
import './Greeting.css'
import ItemCount from './ItemCount'

export default function ItemListContainer({cartelBienvenida}) {
  let clases = 1
  let maxClases = 5
 function onAdd() {
  alert("agregaste al carrito")
 }

  return <div >
    <h2 className='fontGreeting colorGreeting'>{cartelBienvenida}</h2>
   <div style={{marginRight:"0"}}>
    <ItemCount 
    maxClases = {maxClases}
    onAdd = {onAdd}
    clases={clases}/></div>
  </div>
}
