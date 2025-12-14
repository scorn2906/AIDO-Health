import { CreateTodosRequest, STATUS_TODOS } from "../model/todos-model";
import { TodosValidation } from "../validation/todos-validation";
import { Validation } from "../validation/validation";

export class TodosService {
  static async createTodos(request: CreateTodosRequest) {
    const payload = { ...request };
    if (!payload.status) {
      payload.status = STATUS_TODOS.PENDING;
    }
    const todosRequest = Validation.validate(
      TodosValidation.CREATE_TODOS,
      payload
    );

    return todosRequest;
  }
}
