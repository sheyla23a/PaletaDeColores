import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const FormularioColores = () => {
  return (
    <section className="formularioColor d-flex border border-2">
    <div className="cuadrado1 border border-dark border-2"></div>
    <div>
      <Form className="mt-5 d-flex">
        <Form.Group controlId="formBasicEmail">
          <Form.Control type="text" className="FormColor" placeholder="Ingrese un color Ej: Azul" />
        </Form.Group>
        <Button className="ms-4" variant="primary" type="submit">
          Agregar
        </Button>
      </Form>
    </div>
  </section>
  );
};

export default FormularioColores;
