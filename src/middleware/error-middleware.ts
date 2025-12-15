import { NextFunction, Response, Request } from "express";
import { ZodError } from "zod";
import { ResponseError } from "../error/response-error";

export const errorMiddleware = async (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (error instanceof ZodError) {
    res.status(400).json({
      success: false,
      //   errors: `Validation Error : ${JSON.stringify(error)}`,
      data: null,
      message: error.issues[0].message,
    });
  } else if (error instanceof ResponseError) {
    console.log("masuk sini");
    res.status(error.status).json({
      success: false,
      data: null,
      message: error.message,
    });
  } else {
    console.log("masuk sono");
    res.status(500).json({
      success: false,
      data: null,
      message: error.message,
    });
  }
};
