import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const FormularioColores = () => {
  return (
    <section className="formularioColor border border-2">
      <Form className="mt-5 d-flex justify-center">
        <Form.Group controlId="formBasicEmail">
          <Form.Control type="text" className="FormColor" placeholder="Ingrese un color Ej: Azul" />
        </Form.Group>
        <Button className="ms-2 " variant="primary" type="submit">
          Guardar
        </Button>
      </Form>
  </section>
  );
};

export default FormularioColores;
