import { Form, Button, FormControl } from "react-bootstrap";
import ListaColores from "./ListaColores";
import { useEffect, useState } from "react";
import {
  crearColorAPI,
  leerColoresAPI,
  borrarColorAPI,
} from "../helpers/queris.js";

const FormularioColores = () => {
  const [nombreColor, setNombreColor] = useState({
    nombre: "",
    color: "#0000ff",
  });
  const [colores, setColores] = useState([]);

  const consultarColores = async () => {
    try {
      const resultado = await leerColoresAPI();
      setColores(resultado);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    consultarColores();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await crearColorAPI(nombreColor);
      const listaColores = await leerColoresAPI();
      setColores(listaColores);
      setNombreColor({ nombre: " ", color: "#0000ff" });
    } catch (error) {
      console.error("Error al agregar el color:", error);
    }
  };

  const handleBorrarColor = async (id) => {
    try {
      await borrarColorAPI(id);
      // Filtrar la lista de colores para eliminar el color borrado
      const nuevaListaColores = colores.filter(color => color._id !== id);
      setColores(nuevaListaColores);
    } catch (error) {
      console.error("Error al borrar el color:", error);
    }
  };

  return (
    <section className="formularioColor p-4">
      <Form onSubmit={handleSubmit} className="align-items-center">
        <div className="d-flex flex-column flex-lg-row align-items-center">
          <FormControl
            className="FormColor mb-3 mb-lg-0 me-lg-3"
            type="color"
            onChange={(e) =>
              setNombreColor({ ...nombreColor, color: e.target.value })
            }
            value={nombreColor.color}
          />
          <Form.Control
            type="text"
            className="mb-3 mb-lg-0"
            minLength={4}
            maxLength={10}
            placeholder="Ingrese un color (Ej: Azul)"
            onChange={(e) =>
              setNombreColor({ ...nombreColor, nombre: e.target.value })
            }
            value={nombreColor.nombre}
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
      <ListaColores coloresProps={colores} borrarColor={handleBorrarColor} />
    </section>
  );
};

export default FormularioColores;
