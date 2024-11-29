import axios from "axios";
import https from "https";

const agent = new https.Agent({
  rejectUnauthorized: false // Ignora los certificados autofirmados
});

export const bin = async (req, res) => {
  const { bin } = req.body;

  try {
    // Realizando la petición con Axios
    const response = await axios.post(
      `https://bin-ip-checker.p.rapidapi.com/?bin=${bin}`,
      {}, // El cuerpo está vacío ya que en el `curl` no se pasa un cuerpo
      {
        headers: {
          'Content-Type': 'application/json',
          'x-rapidapi-host': 'bin-ip-checker.p.rapidapi.com',
          'x-rapidapi-key': 'd789534517mshf35e053ac130823p1ed6dajsn38c2b4e23198',
        },
        httpsAgent: agent, // Usando el agente para ignorar certificados
      }
    );

    // Enviar la respuesta con los datos obtenidos
    res.status(201).json(response.data);
  } catch (err) {
    console.error(err);
    // En caso de error, envía un mensaje de error en la respuesta
    res.status(500).json({ message: 'Error processing the request' });
  }
};
