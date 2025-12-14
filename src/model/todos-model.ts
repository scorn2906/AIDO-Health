export type TodosResponse = {
  id: string;
  title: string;
  status: STATUS_TODOS;
};

export type CreateTodosRequest = {
  title: string;
  status: STATUS_TODOS;
};

export enum STATUS_TODOS {
  PENDING = "pending",
  DONE = "done",
}
