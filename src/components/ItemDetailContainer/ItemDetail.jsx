/* eslint-disable no-unused-vars */
import React from 'react'
import {ItemCount} from '../ItemCount/ItemCount';
import swal from 'sweetalert'
import '../ItemCount/ItemCount.scss'




export const ItemDetail = ({nombre, precio, descripcion, imgUrl}) => {
  const Cart = []

  const onAdd = (count)=>{
    swal({
      title: "Felicidades!",
      text: `Agregaste ${count} cursos de ${nombre} al carrito 
      Ahora clickea en Terminar compra`,
      icon: "success",
      button: "Ok",
    });
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
 