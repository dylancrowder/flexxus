export class CustomError extends Error {
  public statusCode: number;
  public generalError: any;
  //Aca se puede seguir agrengado informacion de los errores
  constructor(message: string, statusCode: number = 500, generalError: any) {
    super(message);
    this.statusCode = statusCode;
    this.generalError = generalError;
    Object.setPrototypeOf(this, CustomError.prototype);
  }
}
