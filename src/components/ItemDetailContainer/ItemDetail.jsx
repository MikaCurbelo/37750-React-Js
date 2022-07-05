import React from 'react'
import {ItemCount} from '../ItemCount/ItemCount';


export const ItemDetail = ({nombre, precio, descripcion, imgUrl}) => {
  const onAdd = (count)=>{
    alert(`Agragaste ${count} cursos de ${nombre} al carrito`)
    }   

  return (
    <div id='itemDetail'>
        <div>
<img id='img' src={imgUrl} alt="bateria" />
        </div>
        <div id='data'>
            <h1>{nombre}</h1>
            <h2>{descripcion}</h2>
            <h3>Precio ${precio}</h3>
        </div>
      <ItemCount stock={5} initial={1} onAdd={onAdd}></ItemCount>
    </div>
  )
}
 