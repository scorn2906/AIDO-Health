import express from "express";
import { TodosController } from "../controller/todos-controller";

export const publicRouter = express.Router();
publicRouter.post("/api/todos", TodosController.create);
publicRouter.get("/api/todos", TodosController.get);
publicRouter.patch("/api/todos/:id", TodosController.update);
publicRouter.delete("/api/todos/:id", TodosController.delete);
