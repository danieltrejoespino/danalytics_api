import express from 'express';
import { Server } from "socket.io";
import fs from 'fs';
import { createServer } from "https"; 
import { config } from 'dotenv';
import pool from "./src/config/dbConfig.js";
import { chatSocket } from './src/sockets/chatSocket.js';
// import chatRoutes from './src/routes/chatRoutes.js';
import authRoutes from './src/routes/authRoutes.js';
import generalRoutes from './src/routes/generalRoutes.js';
import cors from 'cors';
config();
const PORT =  3000;
const app = express()


const options = {
  key: fs.readFileSync('./src/cert/clave-privada.key'),  // Ruta al archivo de la clave privada
  cert: fs.readFileSync('./src/cert/certificado.crt') // Ruta al archivo del certificado
};


const server = createServer(options,app)
const io = new Server(server, {
  cors: {
    // origin: "https://192.168.1.80:5173", // Reemplaza con la URL de tu frontend
    origin: "https://172.20.2.57:5173", // Reemplaza con la URL de tu frontend
    methods: ["GET", "POST"],
    credentials: true
  }
});

app.use(cors());
app.use(express.json());

// app.use('/api/chat', chatRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/general', generalRoutes);


// Verificar la conexión al iniciar la API
(async () => {
  try {
    const connection = await pool.getConnection();
    console.log('Conexión al pool exitosa');
    connection.release(); // Liberar la conexión
  } catch (err) {
    console.error('Error al conectar con la base de datos:', err.message);
  }
})();



chatSocket(io);


server.listen(PORT, () => {
  console.log(`server running at https://localhost:${PORT}`);
});

