import mysql from "mysql2/promise";
import { CustomError } from "../utilitis/error/customError";
import dotenv from "dotenv";

dotenv.config();

let dbConnect: mysql.Connection | null = null;

async function connectToDatabase(): Promise<mysql.Connection> {
  if (!dbConnect) {
    try {
      dbConnect = await mysql.createConnection({
        host: process.env.DB_HOST_NAME,
        user: process.env.DB_USER_NAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        port: parseInt(process.env.DB_PORT || "3306"),
        ssl: {
          rejectUnauthorized: true,
          ca: process.env.CA_CERTIFICATE,
        },
      });
      console.log("Conexión a la base de datos establecida correctamente.");
    } catch (error) {
      dbConnect = null;
      console.error(error);
      throw new CustomError(
        "Error al conectarse a la base de datos",
        500,
        error
      );
    }
  }
  return dbConnect;
}

export { connectToDatabase };
