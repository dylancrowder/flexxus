import mysql, { Connection } from "mysql2/promise";

let dbConnect: Connection | null = null;

async function connectToDatabase(): Promise<Connection> {
  if (!dbConnect) {
    try {
      dbConnect = await mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "123456789",
        database: "articulos",
        port: 3306,
      });
      console.log("Conexión a la base de datos establecida correctamente.");
    } catch (error) {
      console.error("Error al conectar a la base de datos:", error);
      throw error;
    }
  }
  return dbConnect;
}

export { connectToDatabase };
