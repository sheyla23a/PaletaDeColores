import React from "react";
import { Button, Card } from "react-bootstrap";

const ItemColor = ({ nombreColor, borrarColor }) => {
  return (
    <Card>
      <Card.Body className="d-flex flex-column text-center">
        <Card.Title>{nombreColor.nombre}</Card.Title>
        <hr />
        <div className="cuadroColor" style={{backgroundColor: nombreColor.color}}>
        </div>
        <div className="text-center mt-3">
        <Button variant="danger" onClick={() => borrarColor(nombreColor)}>
          Borrar
        </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ItemColor;
