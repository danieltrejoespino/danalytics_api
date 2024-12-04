import axios from "axios";
import https from "https";
import myslqAccions from "../models/dbModel.js";

const agent = new https.Agent({
  rejectUnauthorized: false, // Ignora los certificados autofirmados
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
          "Content-Type": "application/json",
          "x-rapidapi-host": "bin-ip-checker.p.rapidapi.com",
          "x-rapidapi-key":
            "d789534517mshf35e053ac130823p1ed6dajsn38c2b4e23198",
        },
        httpsAgent: agent, // Usando el agente para ignorar certificados
      }
    );

    // Enviar la respuesta con los datos obtenidos
    res.status(201).json(response.data);
  } catch (err) {
    console.error(err);
    // En caso de error, envía un mensaje de error en la respuesta
    res.status(500).json({ message: "Error processing the request" });
  }
};

export const ConsultaDuplicados = async (req, res) => {
  const { fechaInicio, fechaFin } = req.body;
  const url = "http://172.23.62.183:3000/api/consultaDuplicadosGrab";
  // const url = "http://172.20.1.89:3002/api/consultaDuplicadosGrab";

  const fechas = {
    fechaInicio,
    fechaFin,
  };
  try {
    // Realizando la petición con Axios
    const response = await axios.post(url, fechas, {
      headers: {
        "Content-Type": "application/json",
      },
      httpsAgent: agent, // Usando el agente para ignorar certificados
    });
    res.status(200).json(response.data);
  } catch (err) {
    console.error(err);
    // En caso de error, envía un mensaje de error en la respuesta
    res.status(500).json({ message: "Error processing the request" });
  }
};

export const reEtiquetado = async (req, res) => {
  const { fechaInicio, fechaFin } = req.body;
  const url = "http://172.23.62.183:3000/api/reEtiquetado";
  // const url = "http://172.20.1.89:3002/api/reEtiquetado";

  const fechas = {
    fechaInicio,
    fechaFin,
  };
  try {
    // Realizando la petición con Axios
    const response = await axios.post(url, fechas, {
      headers: {
        "Content-Type": "application/json",
      },
      httpsAgent: agent, // Usando el agente para ignorar certificados
    });
    res.status(200).json(response.data);
  } catch (err) {
    console.error(err);
    // En caso de error, envía un mensaje de error en la respuesta
    res.status(500).json({ message: "Error processing the request" });
  }
};


export const getPhoneExt = async (req, res) => {

  try {
    const log= await myslqAccions.getExt()
    // console.log(log);    
    if(log.length > 0){
      res.status(200).json(log)
    }else {
      res.status(404).json({ rspta: 'NO MENU' })
    }
  } catch (error) {
    console.log(error);
  }
  

};










const dateFormat = (data) => {
	return data.replace(/\//g, "-");
}
