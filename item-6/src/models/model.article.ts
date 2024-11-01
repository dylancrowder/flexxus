import { connectToDatabase } from "../db/db_connect";

export class ArticleModel {
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
      console.error("Error al obtener artículos:", error);
      throw new Error("Error en la base de datos");
    }
  }
}
