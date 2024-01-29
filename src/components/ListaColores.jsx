import ListGroup from "react-bootstrap/ListGroup";
import ItemColor from "./ItemColor";

const ListaColores = ({ coloresProps }) => {
  return (
    <div>
      <ListGroup>
        {coloresProps.map((elementoColor,posicionColor) => (
          <ItemColor key={posicionColor} nombreColor={elementoColor}></ItemColor>
        ))}
      </ListGroup>
    </div>
  );
};

export default ListaColores;
