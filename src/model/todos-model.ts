export type Todos = {
  id: string;
  title: string;
  status: "pending" | "done";
};

export type CreateTodosRequest = {
  title: string;
  status: "pending" | "done";
  // status: STATUS_TODOS;
};

export type UpdateTodosRequest = {
  // status: STATUS_TODOS;
  id: string;
  status: "pending" | "done";
};
