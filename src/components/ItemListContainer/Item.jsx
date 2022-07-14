import React from 'react'
import { Card, Button } from "react-bootstrap"
import { Link } from "react-router-dom"


export const Item = ({id, nombre, precio, descripcion, imgUrl}) => {


  return (
    <Card style={{ width: '18rem' }} id='item'>
      <Card.Img variant="top" src={imgUrl} />
        <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Title>Precio: ${precio} por mes (cuatro clases)</Card.Title>
          <Card.Text>{descripcion}</Card.Text>
        <Button variant="primary"><Link to={`/item/${id}`} className="linkbtn">Ver Curso</Link></Button>
      </Card.Body>
</Card>
  )
}


