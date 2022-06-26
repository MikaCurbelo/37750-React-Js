// @ts-check
import React from 'react';
import './App.css';
// import Item from './components/Item'
// import ItemList from './components/ItemList';
import './components/NavBar/NavBar'
import { NavBar } from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemCount from './components/ItemCount/ItemCount';




function App() {

const onAdd = () =>{
  
}
 


  return (
  <>
<NavBar/>
<ItemListContainer cartelBienvenida={"Consigue tus cursos ya"}/>
<ItemCount stock={5} initial={1} onAdd={onAdd}/>
</>
  );
}

export default App;
