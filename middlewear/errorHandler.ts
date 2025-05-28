import { Request, Response, NextFunction } from "express";
import { CustomError } from "../type/type";

const errorHandler = (
  err: CustomError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Something went wrong please try again later";

  res.status(statusCode).json({ message: message });
  return;
};

export default errorHandler;
