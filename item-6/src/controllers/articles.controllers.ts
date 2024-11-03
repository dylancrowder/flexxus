import { NextFunction, Request, Response } from "express";
import { ArticleModel } from "../models/model.article";
import Joi from "joi";

import { articleSchema, querySchema } from "../utilitis/joi";
import { CustomError } from "../utilitis/error/customError";

export class ArticleController {
  static async getByFilters(req: Request, res: Response, next: NextFunction) {
    const { name, is_active, exact_match } = req.query;

    //Validar parametros
    const { error } = querySchema.validate(req.query);
    if (error) {
      return next(
        new CustomError(`Parametros faltantes en la consulta`, 400, error)
      );
    }

    const isExactMatch = exact_match === "true";
    // Buscar Articulos
    try {
      const articles: any = await ArticleModel.findArticlesByFilters(
        name as string | undefined,
        is_active === "true",
        isExactMatch
      );

      if (articles.length === 0) {
        return next(
          new CustomError(
            "No se encontraron productos con los criterios de búsqueda especificados.",
            404,
            "el array no contiene nada"
          )
        );
      }

      const validationResult = Joi.array()
        .items(articleSchema)
        .validate(articles);
      if (validationResult.error) {
        return next(
          new CustomError(
            `Error al validar productos.`,
            400,
            validationResult.error
          )
        );
      }

      res.status(200).json(articles);
    } catch (error: any) {
      console.log(error);

      next(new CustomError(`Error inesperado ${error}`, 500, error));
    }
  }
}
