import { Form, Button } from "react-bootstrap";
import ListaColores from "./ListaColores";

const FormularioColores = () => {
  return (
    <section className="formularioColor border border-2 p-3">
      <Form className="mt-3 mt-md-5 mx-3 mx-md-5">
        <Form.Group controlId="formBasicEmail">
          <Form.Control
            type="text"
            className="FormColor"
            minLength={4}
            maxLength={10}
            placeholder="Ingrese un color (Ej: Azul)"
          />
        </Form.Group>
        <div className="d-flex justify-content-center my-3  mt-md-0">
          <Button className="ms-2 mt-2 mt-md-3" variant="primary" type="submit">
            Guardar
          </Button>
        </div>
      </Form>
      <ListaColores></ListaColores>
    </section>
  );
};

export default FormularioColores;
