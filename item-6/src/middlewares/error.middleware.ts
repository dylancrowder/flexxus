import { Request, Response, NextFunction, RequestHandler } from "express";
import { CustomError } from "../utilitis/error/customError";

export const errorHandler: any = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
): Response | void => {
  if (err instanceof CustomError) {
    console.log("error general:", err.generalError);
    //retorna un error personalizado con su status code y objeto json con un mensaje
    return res.status(err.statusCode).json({ message: err.message });
  }

  res.status(500).json({ message: "Ocurrio algo inesperado" });
};
