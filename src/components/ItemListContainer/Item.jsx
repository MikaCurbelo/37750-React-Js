import React from 'react'
import { Card, Button } from "react-bootstrap"


export const Item = ({nombre, precio, descripcion, imgUrl}) => {
  return (
    <Card style={{ width: '18rem' }} id='item'>
      <Card.Img variant="top" src={imgUrl} />
        <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Title>Precio: ${precio} por mes</Card.Title>
          <Card.Text>{descripcion}</Card.Text>
        <Button variant="primary">Ver más</Button>
      </Card.Body>
</Card>
  )
}


