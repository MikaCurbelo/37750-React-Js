/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import './Greeting.css'
import { useEffect, useState } from 'react'

export default function ItemListContainer({cartelBienvenida}) {
  const [productos, setproductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  let instrumentoCurso;

  useEffect(() => {
 instrumentoCurso = new Promise((res, rej)=> {
    setTimeout(() => {
     if(Math.random() < 0.5){
        res([
            {id: 1, nombre:"Piano", precio: 550},
            {id: 2, nombre:"Batería", precio: 700},
            {id: 3, nombre:"Guitarra", precio: 500},
        ]);
     }else{
        rej("No has comprado ningún curso");
     }

    }, 2000);
 });

 instrumentoCurso.then((resultado)=>{
    setLoading(false);
    setproductos(resultado);
 })
 .catch((err)=>{
    setLoading(false);
    setError(true);
 })
 
 .finally(()=>{
    setLoading(false);
 });
 


  }, []);

  return <div >
    <h2 className='fontGreeting colorGreeting'>{cartelBienvenida}</h2>
   
    <div onClick={()=>{
    console.log(instrumentoCurso);
  }}>
    {loading && "Cargando..."}
    {error && "ERROR en la carga"}
    {productos && <ItemListContainer productos = {productos}/>}
    </div>
   
     
    
    
    
   
    
  </div>
}
