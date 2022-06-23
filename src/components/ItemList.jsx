/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { useEffect, useState } from 'react'

export default function ItemList() {
const [producto, setProducto] = useState({});
const [loading, setLoading] = useState(true);
const [error, setError] = useState(false);



let instrumentoCurso;

  useEffect(() => {
 instrumentoCurso = new Promise((res, rej)=> {
    setTimeout(() => {
     if(Math.random() < 0.5){
        res({id: 1, nombre:"Guitarra", precio: 500});
     }else{
        rej("No has comprado ningún curso");
     }

    }, 2000);
 });

 instrumentoCurso.then((resultado)=>{
    setLoading(false);
    setProducto(resultado);
 })
 .catch((err)=>{
    setLoading(false);
    setError(true);
 })
 
 .finally(()=>{
    setLoading(false);
 });
 


  }, []);

  return (<div onClick={()=>{
    console.log(instrumentoCurso);
  }}>
    {loading && "Cargando..."}
    {error && "ERROR en la carga"}
    {producto && <div>{JSON.stringify(producto)}</div>}
    </div>
  )
}
