// @ts-check
import React from 'react';
import './App.css';
import './components/NavBar/NavBar'
import { NavBar } from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
// import {ItemCount} from './components/ItemCount/ItemCount';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from "react-router-dom"



function App() {

// const onAdd = (count)=>{
// alert(`Agragaste ${count} cursos al carrito`)
// }
 


  return (
  <div>
    <>
    {
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
          <Route path='/Item/:itemId' element={<ItemDetailContainer/>}/>


        </Routes>
      </BrowserRouter>
       /*
      <ItemCount stock={5} initial={1} onAdd={onAdd}></ItemCount>
      */
    }
    </>
</div>
  );
}

export default App;
