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
       
        <div 
        onClick={()=> agregar() } 
        style={{border: "Solid 2px green", width: "110px"}}>Agregar</div>
       
       <div 
       style={{border: "none 2px green", width: "100px"}}>{auxClases}</div>
       
       <div
       onClick={()=> quitar() } 
       style={{border: "Solid 2px red", width: "110px"}}>Quitar</div>

       <div
       onClick={()=> onAdd() } 
       style={{border: "Solid 2px violet", width: "110px"}}>Comprar</div>
    
    
    </div>
  )
}
