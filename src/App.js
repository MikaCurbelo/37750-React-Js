// @ts-check
import React from 'react';
import './App.css';
import './components/NavBar/NavBar'
// import { NavBar } from './components/NavBar/NavBar';
// import ItemListContainer from './components/ItemListContainer/ItemListContainer'
// import {ItemCount} from './components/ItemCount/ItemCount';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';




function App() {

// const onAdd = (count)=>{
// alert(`Agragaste ${count} cursos al carrito`)
// }
 


  return (
  <div>
{/*
<NavBar/>
<ItemListContainer/>
<ItemCount stock={5} initial={1} onAdd={onAdd}></ItemCount>
  */}
  <ItemDetailContainer/>
</div>
  );
}

export default App;
