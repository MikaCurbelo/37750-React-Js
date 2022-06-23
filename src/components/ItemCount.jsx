import React from 'react'
import { useState, useEffect } from 'react';

export default function ItemCount({clases, onAdd, maxClases}) {
    
    let [auxClases, setAuxClases] = useState(clases);
    
useEffect(() => {
    if(auxClases > maxClases){
        alert("No puedes tomar mas de " + maxClases + " clases")
    }
}, [auxClases]);



    function agregar() {
        setAuxClases (auxClases + 1);
    
    }

    function quitar(){
       setAuxClases (auxClases - 1);
    }


  return (
    <div >
       
        <button 
        disabled ={auxClases >= 5} onClick={()=> agregar() }  
        style={{border: "Solid 2px green", width: "110px"}}>Agregar</button>
       
       <div>{auxClases}</div>
       
       <button
       disabled ={auxClases <= 1}
       onClick={()=> quitar() }
       style={{border: "Solid 2px red", width: "110px"}}>Quitar</button>

       <button
       onClick={()=> onAdd() } 
       style={{border: "Solid 2px violet", width: "110px"}}>Comprar</button>
    
    
    </div>
  )
}
