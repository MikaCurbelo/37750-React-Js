// @ts-check
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './components/NavBar/NavBar'
import { NavBar } from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from "react-router-dom"


function App() {


  return (
  
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
    }
    </>
  );
}

export default App;
