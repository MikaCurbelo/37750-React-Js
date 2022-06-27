import React from 'react'

export const ItemDetail = ({nombre, precio, descripcion, imgUrl}) => {
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
    </div>
  )
}
 