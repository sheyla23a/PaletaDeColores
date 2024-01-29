import { Form, Button } from "react-bootstrap";
import ListaColores from "./ListaColores";
import { useState } from "react";

const FormularioColores = () => {
  const [color, setColor] = useState("");
  const[colores,setColores] = useState([]);
   
  const handleSubmit = (e)=>{
    e.preventDefault();
    setColores([... colores, color]);
    setColor('')
  } 

  const borrarColor = (nombreColor)=>{
    const coloresFiltrados = colores.filter((color)=> color !== nombreColor);
    setColores(coloresFiltrados);
  }

  return (
    <section className="formularioColor border border-2 p-3">
      <Form onSubmit={handleSubmit} className="mt-3 mt-md-5 mx-3 mx-md-5">
        <Form.Group controlId="formBasicEmail">
          <Form.Control
            type="text"
            className="FormColor"
            minLength={4}
            maxLength={10}
            placeholder="Ingrese un color (Ej: Azul)"
            onChange={(e)=>setColor(e.target.value)}
            value={color}
          />
        </Form.Group>
        <div className="d-flex justify-content-center my-3  mt-md-0">
          <Button className="ms-2 mt-2 mt-md-3" variant="primary" type="submit">
            Guardar
          </Button>
        </div>
      </Form>
      <ListaColores coloresProps={colores} borrarColor={borrarColor}></ListaColores>
    </section>
  );
};

export default FormularioColores;
