import Joi from "joi";

// Esquema para validar los parámetros de consulta
export const querySchema = Joi.object({
  name: Joi.string().optional(),
  is_active: Joi.string().valid("true", "false").optional(),
  exact_match: Joi.string().valid("true", "false").optional(),
});

// Esquema para validar la estructura de un artículo
export const articleSchema = Joi.object({
  ID: Joi.number().required(),
  NOMBRE: Joi.string().required(),
  MARCA: Joi.string().required(),
  ESTADO: Joi.number().valid(0, 1).required(),
  FECHA_MODIFICACION: Joi.date().required(),
});
