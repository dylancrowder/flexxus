import { NextFunction, Request, Response } from "express";
import { ArticleModel } from "../models/model.article";
import AppError from "../utilitis/appError";
import Joi from "joi";
import { Article } from "../interfaces/article.interface";
import { articleSchema, querySchema } from "../utilitis/joi";

export class ArticleController {
  static async getByFilters(req: Request, res: Response, next: NextFunction) {
    const { name, is_active, exact_match } = req.query;

    // Validar los parámetros de consulta
    const { error } = querySchema.validate(req.query);
    if (error) {
      return next(
        new AppError(`Parámetros de consulta inválidos: ${error.message}`, 400)
      );
    }

    const isExactMatch = exact_match === "true";

    try {
      const articles: any = await ArticleModel.findArticlesByFilters(
        name as string | undefined,
        is_active === "true",
        isExactMatch
      );

      if (articles.length === 0) {
        return next(new AppError("No se encontraron artículos", 404));
      }

      // Validar la respuesta antes de enviarla
      const validationResult = Joi.array()
        .items(articleSchema)
        .validate(articles);
      if (validationResult.error) {
        return next(
          new AppError(
            `Error en la estructura de los datos de respuesta: ${validationResult.error.message}`,
            500
          )
        );
      }

      res.status(200).json(articles);
    } catch (error: any) {
      next(new AppError("Error al obtener artículos", 500));
    }
  }
}
