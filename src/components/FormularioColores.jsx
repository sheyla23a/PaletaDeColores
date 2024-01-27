import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const FormularioColores = () => {
  return (
    <section className="formularioColor border border-2">
      <Form className="mt-5 mx-5">
        <Form.Group controlId="formBasicEmail">
          <Form.Control type="text" className="FormColor"  minLength={4}
            maxLength={10} placeholder="Ingrese un color Ej: Azul" />
        </Form.Group>
        <div className="d-flex justify-content-center mt-">
        <Button className="ms-2 mt-3" variant="primary" type="submit">
          Guardar
        </Button>
        </div>
      </Form>
  </section>
  );
};

export default FormularioColores;
