/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './NavBar.css'
import CartWidget from './CartWidget'
import { GiMusicalNotes } from "react-icons/gi";
import { Link } from "react-router-dom"
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';




export const NavBar = () => {
  return (
    <div>
      <Navbar className="fontColorNav backNav icono">
        <Container className="fontColorNav backNav icono">
          <Link to={"/"} className="logo backNav">
                <GiMusicalNotes/>
                  <h1>CLASES DE MÚSICA</h1>
                <GiMusicalNotes/>
          </Link> 
          <div>
            {/* <Navbar.Toggle/> */}
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="dropDown">
                <NavDropdown title="Cursos" id="basic-nav-dropdown">
                  <NavDropdown.Item value="Piano"><Link to={"category/teclados"}>Piano</Link></NavDropdown.Item>
                  <NavDropdown.Item value="Batería"><Link to={"category/percusion"}>Batería</Link></NavDropdown.Item>
                  <NavDropdown.Item value="Guitarra"><Link to={"category/cuerdas"}>Guitarra</Link></NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
      <div className="espacio backNav"><CartWidget msg= "0"/></div>

    </div>
  )
}
