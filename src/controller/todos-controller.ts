import { NextFunction, Request, Response } from "express";
import { TodosService } from "../service/todos-service";
import { Validation } from "../validation/validation";
import { TodosValidation } from "../validation/todos-validation";
import { ResponseError } from "../error/response-error";
import { logger } from "../applications/logging";

export class TodosController {
  static async get(req: Request, res: Response, next: NextFunction) {
    try {
      const status = req.query.status as string | undefined;
      const response = await TodosService.getTodos(status);
      res.status(200).json({
        success: true,
        message: "Todos list",
        data: response,
      });
      logger.info(`GET /todos returned ${response.length} todos`);
    } catch (error) {
      logger.error(`GET /todos failed ${error}`);
      next(error);
    }
  }

  static async create(req: Request, res: Response, next: NextFunction) {
    try {
      const payload = Validation.validate(
        TodosValidation.createTodoSchema,
        req.body
      );
      const response = await TodosService.createTodos(payload);
      res.status(201).json({
        success: true,
        message: "Create Todos Success",
        data: response,
      });
    } catch (error) {
      logger.error(`POST /todos Failed to create todo: ${Error}`);
      next(error);
    }
  }

  static async update(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id;
      if (!id) throw new ResponseError(400, "id is required");

      const payload = Validation.validate(
        TodosValidation.updateTodoSchema,
        req.body
      );
      const response = await TodosService.updateTodos({
        id,
        status: payload.status,
      });
      res.status(200).json({
        success: true,
        message: "Update Todos Success",
        data: response,
      });
    } catch (error) {
      logger.error(`PATCH /todos Failed to update todo: ${Error}`);
      next(error);
    }
  }

  static async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id;
      if (!id) throw new ResponseError(400, "id is required");
      await TodosService.deleteTodos(id);
      res.status(200).json({
        success: true,
        message: "Delete Todos Success",
        data: null,
      });
    } catch (error) {
      logger.error(`PATCH /todos Failed to delete todo: ${Error}`);
      next(error);
    }
  }
}
