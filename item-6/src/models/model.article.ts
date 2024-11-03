import { connectToDatabase } from "../db/db_connect";
import { CustomError } from "../utilitis/error/customError";

export class ArticleModel {
  //Filtrar Articulos
  static async findArticlesByFilters(
    name?: string,
    isActive?: boolean,
    exactMatch?: boolean
  ) {
    let query = "SELECT * FROM ARTICLE WHERE 1=1";
    const params: (string | boolean)[] = [];

    if (name) {
      if (exactMatch) {
        query += " AND NOMBRE = ?";
      } else {
        query += " AND NOMBRE LIKE CONCAT('%', ?, '%')";
      }
      params.push(name);
    }

    if (isActive !== undefined) {
      query += " AND ESTADO = ?";
      params.push(isActive);
    }

    try {
      const dbConnect = await connectToDatabase();
      const [rows] = await dbConnect.query(query, params);
      return rows;
    } catch (error) {
      throw new CustomError(
        "Error al conectar con la base de datos.",
        500,
        error
      );
    }
  }
}
