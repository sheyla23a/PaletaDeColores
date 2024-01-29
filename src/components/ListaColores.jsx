import ListGroup from "react-bootstrap/ListGroup";
import ItemColor from "./ItemColor";

const ListaColores = ({ coloresProps,borrarColor }) => {
  return (
    <div>
      <ListGroup>
        {coloresProps.map((elementoColor,posicionColor) => (
          <ItemColor key={posicionColor} nombreColor={elementoColor} borrarColor={borrarColor}></ItemColor>
        ))}
      </ListGroup>
    </div>
  );
};

export default ListaColores;
