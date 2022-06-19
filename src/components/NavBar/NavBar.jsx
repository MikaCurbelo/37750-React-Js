import React from 'react'
import './NavBar.css'
import CartWidget from '../CartWidget'




export const NavBar = () => {
  return (
    <div>
      <span className="logo fontColorNav backNav">
       <h1>CLASES DE MÚSICA</h1>
      </span>
    <nav className="navbar navbar-expand-lg navbar-light backNav">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Inicio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Galería</a>
        </li>
        <select className='backNav borde'>
          <option selected value="Cursos">Cursos</option>
          <option value="Piano">Piano</option>
          <option  value="Bateria">Bateria</option>
          <option value="Guitarra">Guitarra</option>
        </select>
      </ul>
      <div className="espacio"><CartWidget msg= "0"/></div>
      
    </div>
  </div>
</nav>
    </div>
  )
}
