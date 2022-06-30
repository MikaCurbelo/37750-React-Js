/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './NavBar.css'
import CartWidget from './CartWidget'
import { GiMusicalNotes } from "react-icons/gi";
import { Link } from "react-router-dom"




export const NavBar = () => {
  return (
    <div>
      <span className="fontColorNav backNav icono">
        <Link to={"/"} className="logo backNav">
        <GiMusicalNotes/>
          <h1>CLASES DE MÚSICA</h1>
        <GiMusicalNotes/>
        </Link>
      </span>
    <nav className="navbar navbar-expand-lg navbar-light backNav">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <select className='backNav borde'>
          <option selected value="Cursos">Cursos</option>
          <option value="Piano"><Link to={"categoria/teclados"}>Piano</Link></option>
          <option  value="Bateria"><Link to={"categoria/percusion"}>Bateria</Link></option>
          <option value="Guitarra"><Link to={"categoria/cuerdas"}>Guitarra</Link></option>
        </select>
      </ul>
      <div className="espacio"><CartWidget msg= "0"/></div>
      
    </div>
  </div>
</nav>
    </div>
  )
}
