import React from 'react'

export default function ItemList({productos}) {
  return (
    <div>
      {productos.map((producto) => (
        <div key={producto.id}>
          Id {producto.id}, 
          curso {producto.nombre}, 
          precio {producto.precio} </div> 
          ))} 
      </div>
  );
}

