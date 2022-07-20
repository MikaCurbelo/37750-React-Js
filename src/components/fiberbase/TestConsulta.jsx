import React, { useState, useEffect} from 'react'
import {doc, getDoc, getFirestore} from 'firebase/firestore' 



export default function TestConsulta() {
const [item, setItem] = useState({})
useEffect(() => {
  const db = getFirestore();
  const bateria = doc(db, 'items', '3gqvG4XBCDafpeKemR4v');
  getDoc(bateria).then((res)=>{

    setItem({...res.data(), id: res.id});

  });

}, []);



  return (
    <div>{item && <>{JSON.stringify(item)}</>}</div>
    
  )
}
