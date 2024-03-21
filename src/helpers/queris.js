const URL_COLORES = import.meta.env.VITE_API_COLORES;
const URL_COLOR = import.meta.env.VITE_API_COLOR;

const leerColoresAPI = async () => {
  try {
    const respuesta = await fetch(`${URL_COLORES}`);
    const listaColores = await respuesta.json();
    return listaColores;
  } catch (error) {
    console.log(error);
  }
};

const crearColorAPI = async (colorNuevo) => {
  try {
    const respuesta = await fetch(`${URL_COLORES}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(colorNuevo),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

const borrarColorAPI = async (id) => {
  try {
    const respuesta = await fetch(`${URL_COLOR}/${id}`, {
      method: "DELETE",
    });
    console.log(respuesta);
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export { leerColoresAPI, crearColorAPI, borrarColorAPI };
