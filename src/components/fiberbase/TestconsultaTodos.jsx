import React, { useState, useEffect} from 'react'
import {collection, getDocs, getFirestone} from 'firebase/firestone' 

export default function TestConsulta() {
const [items, setItems] = useState([])
useEffect(() => {
  const db = getFirestone();
  const coleccionEntera = collection(db, 'Item');
  getDocs(coleccionEntera).then((res)=>{
    console.log(res.docs);
    const auxArray = res.docs.map(item => ({...item.data(), id: item.id}));
    setItems(auxArray);
    // console.log(auxArray);
    // setItem({...res.data(), id: res.id});
  });
}, []);



  return (
    <div>{items && <>{JSON.stringify(items)}</>}</div>
  )
}
