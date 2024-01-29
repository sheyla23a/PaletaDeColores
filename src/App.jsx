import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import FormularioColores from "./components/FormularioColores";
import "./App.css";

function App() {
  return (
    <Container className="mt-5 p-2 border border-2">
      <p>Administrar colores</p>
      <FormularioColores></FormularioColores>
    </Container>
  );
}

export default App;
