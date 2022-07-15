import React, { useState, useEffect} from 'react'
import {doc, getDoc, getFirestone} from 'firebase/firestone' 

export default function TestConsulta() {
const [item, setItem] = useState({})
useEffect(() => {
  const db = getFirestone();
  const bateria = doc(db,'Item', 'CPLk0APksPsjripZcGVD');
  getDoc(bateria).then((res)=>{
    setItem({...res.data(), id: res.id});
  });
}, []);



  return (
    <div>{item && <>{JSON.stringify(item)}</>}</div>
  )
}
