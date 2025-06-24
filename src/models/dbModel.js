import pool from "../config/dbConfig.js";


const myslqAccions = {
  checkConn : async () => {
    let connection;
    try {
      connection = await pool.getConnection();
      
      const [rows] = await connection.query('SELECT 1');
      
      return rows;

    } catch (error) {
      throw new Error("Database connection error: " + error.message);
    }finally {
      // Liberar la conexión al pool
      if (connection) connection.release();
    }
  },
  getExt: async () => {
    let connection;
    try {
      connection = await pool.getConnection();
      const [rows] = await connection.query(`SELECT NOMBRE_MOSTRAR,EXTENSION,AREA  FROM TBL_PHONE_EXT WHERE UPPER(ESTATUS) = 'ACTIVO' `);
      return rows;
    } catch (error) {
      console.log(error);
    }finally {
      // Liberar la conexión al pool
      if (connection) connection.release();
    }
  },
  getIp: async () => {
    let connection;
    try {
      connection = await pool.getConnection();
      const [rows] = await connection.query(`SELECT CAMPANA,NAME,IP,ENVIROMENT,TYPE_APP,COMMENTS  FROM TBL_APP_SERVICES WHERE STATUS = 1`);
      return rows;
    } catch (error) {
      console.log(error);
    }finally {
      // Liberar la conexión al pool
      if (connection) connection.release();
    }
  },
}


// module.exports = myslqAccions;
export default myslqAccions;
