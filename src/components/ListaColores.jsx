import React from "react";
import { Col, Row } from "react-bootstrap";
import ItemColor from "./ItemColor";

const ListaColores = ({ coloresProps, borrarColor }) => {
  return (
    <Row xs={1} md={2} lg={3} className="g-4 mt-5">
      {coloresProps.map((color) => (
        <Col key={color._id}>
          <ItemColor color={color} borrarColor={borrarColor} />
        </Col>
      ))}
    </Row>
  );
};

export default ListaColores;



