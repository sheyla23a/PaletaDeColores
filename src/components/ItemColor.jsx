import React from "react";
import { Button, Card } from "react-bootstrap";

const ItemColor = ({ color, borrarColor }) => {
  if (!color || !color.nombre) {
    return (
      <Card>
        <Card.Body className="text-center">
          <Card.Text>Nombre de color no disponible.</Card.Text>
        </Card.Body>
      </Card>
    );
  }

  const handleBorrarColor = async () => {
    try {
      await borrarColor(color._id);
    } catch (error) {
      console.error("Error al borrar el color:", error);
    }
  };

  return (
    <Card>
      <Card.Body className="d-flex flex-column text-center">
        <Card.Title>{color.nombre}</Card.Title>
        <hr />
        <div
          className="cuadroColor"
          style={{ backgroundColor: color.color }}
        ></div>
        <div className="text-center mt-3">
          <Button variant="danger" onClick={handleBorrarColor}>
            Borrar
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ItemColor;
