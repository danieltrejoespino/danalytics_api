import mysql from 'mysql2/promise';


// Crear y exportar el pool de conexiones
const pool = mysql.createPool({
  host: '172.20.1.149',
  user: 'lresendiz',
  password: 'R3s3nd1z*',
  database: 'imp_internal',
  waitForConnections: true,
  connectionLimit: 1, // Máximo número de conexiones simultáneas
  queueLimit: 0 // Sin límite en la cola de solicitudes
});

// module.exports = pool;
export default pool;
