import { NextFunction, Request, Response } from "express";
import { CreateTodosRequest } from "../model/todos-model";
import { TodosService } from "../service/todos-service";
import { success } from "zod";

export class TodosController {
  static async CreateTodos(req: Request, res: Response, next: NextFunction) {
    try {
      const request: CreateTodosRequest = req.body as CreateTodosRequest;
      const response = await TodosService.createTodos(request);
      res
        .status(200)
        .json({
          success: 200,
          message: "Create Todos Success",
          data: response,
        });
    } catch (error) {
      next(error);
    }
  }
}
