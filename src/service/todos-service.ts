import { read, write } from "../libs/db-json";
import {
  CreateTodosRequest,
  Todos,
  UpdateTodosRequest,
} from "../model/todos-model";
import { v4 } from "uuid";
import { ResponseError } from "../error/response-error";
import { logger } from "../applications/logging";

export class TodosService {
  static async getTodos(status?: string) {
    const todosDb = await read<Todos>();
    if (status) return todosDb.filter((item) => item.status === status);
    return todosDb;
  }

  static async createTodos(request: CreateTodosRequest) {
    const todosDb = await read<Todos>();
    const payload: Todos = {
      ...request,
      id: v4(),
      status: request.status ?? "pending",
    };
    todosDb.push(payload);
    await write(todosDb);
    logger.info(`Todo created: ${payload.id} - ${payload.title}`);
    return payload;
  }

  static async checkTodosExists(id: string) {
    const todosDb = await read<Todos>();

    const index = todosDb.findIndex((item) => item.id === id);

    if (index === -1) {
      logger.warn(`Todo not found: ${id}`);
      throw new ResponseError(404, "Data not found");
    }
    return index;
  }

  static async updateTodos(request: UpdateTodosRequest) {
    const todosDb = await read<Todos>();
    const index = await this.checkTodosExists(request.id);
    todosDb[index].status = request.status;
    await write(todosDb);
    logger.info(`Todo updated: ${request.id} with payload ${todosDb[index]}`);
    return todosDb[index];
  }

  static async deleteTodos(id: string) {
    const todosDb = await read<Todos>();
    const index = await this.checkTodosExists(id);
    logger.info(`Todo deleted: ${todosDb[index]}`);
    todosDb.splice(index, 1);
    await write(todosDb);

    return null;
  }
}
