import React from 'react';
import './App.css';
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
{/* <ItemList/> */}
    </div>
  );
}

export default App;
