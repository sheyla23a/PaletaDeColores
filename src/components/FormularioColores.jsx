import { Form, Button, FormControl } from "react-bootstrap";
import ListaColores from "./ListaColores";
import { useEffect, useState } from "react";

const FormularioColores = () => {
  const [color, setColor] = useState("");
  const coloresLocalStorage =
    JSON.parse(localStorage.getItem("coloresKey")) || [];
  const [colorHexa, setColorHexa] = useState("#0000ff");
  const [colores, setColores] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isNaN(color) && color.trim().length > 0 && !colores.includes(color)) {
      const colorSeleccionado = { nombre: color, color: colorHexa };
      setColores([...colores, colorSeleccionado]);
      setColor("");
    } else {
      if (colores.includes(color)) {
        alert("Este color ya ha sido ingresado anteriormente.");
      } else {
        alert(
          "Ingresa un color válido (no debe ser un número y debe tener al 4 carácterer)."
        );
      }
    }
  };

  const borrarColor = (nombreColor) => {
    const coloresFiltrados = colores.filter((color) => color !== nombreColor);
    setColores(coloresFiltrados);
  };

  useEffect(() => {
    localStorage.setItem("coloresKey", JSON.stringify(colores));
  }, [colores]);

  return (
    <section className="formularioColor p-4">
      <Form
        onSubmit={handleSubmit}
        className="align-items-center"
      >
        <div className="d-flex flex-column flex-lg-row align-items-center">
          <FormControl
            className="FormColor mb-3 mb-lg-0 me-lg-3"
            type="color"
            onChange={(e) => setColorHexa(e.target.value)}
            value={colorHexa}
          />
          <Form.Control
            type="text"
            className="mb-3 mb-lg-0"
            minLength={4}
            maxLength={10}
            placeholder="Ingrese un color (Ej: Azul)"
            onChange={(e) => setColor(e.target.value)}
            value={color}
            style={{ width: "100%" }}
          />
        <Button
          className="ms-lg-4 mt-3 mt-lg-0"
          variant="primary"
          type="submit"
          style={{ minWidth: "100px", height: "35px" }}
        >
          Guardar
        </Button>
        </div>
      </Form>

      <ListaColores coloresProps={colores} borrarColor={borrarColor} />
    </section>
  );
};

export default FormularioColores;
