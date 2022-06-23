import React from 'react';
import './App.css';
import Item from './components/Item'
import ItemList from './components/ItemList';
import ItemListContainer from './components/ItemListContainer';
import './components/NavBar/NavBar'
import { NavBar } from './components/NavBar/NavBar';

function App() {
  
 


  return (
    <div className="App">
<NavBar/>
<ItemListContainer 
cartelBienvenida="Bienvenido! Comienza tus clases ya!!"/>
<Item/>
<ItemList/>
    </div>
  );
}

export default App;
