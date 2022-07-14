/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react'
import {ItemCount} from '../ItemCount/ItemCount';
import swal from 'sweetalert'
import '../ItemCount/ItemCount.scss'
import { CartContext } from '../Context/CartContext';
import { Link } from 'react-router-dom'




export const ItemDetail = ({nombre, precio, descripcion, imgUrl, stock}) => {
  const [button, setButton] = useState(false);

  const cartContext = useContext(CartContext);
  const {cart, addToCart} = cartContext;



  const onAdd = (count)=>{

    setButton(true)
/*  addToCart(nombre, count); */

    swal({
      title: "Hecho",
      text: 'Agregaste '+count + ' clases de ' + nombre + ' al carrito',
      icon: "success",
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
        
     {button? 
     <Link to="/Cart"><button>Terminar compra</button></Link>
     :
     <ItemCount stock={stock} initial={1} onAdd={onAdd}></ItemCount>
    }
      
    </div>
  )
}
 