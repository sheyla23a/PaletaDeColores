import { Button, ListGroup } from "react-bootstrap";

const ItemColor = () => {
  return (
    <ListGroup.Item className="d-flex justify-content-between">Nombre Color<Button variant="danger">Borrar</Button></ListGroup.Item>
  );
};

export default ItemColor;