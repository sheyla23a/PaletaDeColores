import { Button, ListGroup } from "react-bootstrap";

const ItemColor = ({nombreColor,borrarColor}) => {
  return (
    <ListGroup.Item className="d-flex justify-content-between">{nombreColor}<Button variant="danger" onClick={()=> borrarColor(nombreColor)}>Borrar</Button></ListGroup.Item>
  );
};

export default ItemColor;