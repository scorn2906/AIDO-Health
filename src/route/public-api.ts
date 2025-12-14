import express from "express";
import { TodosController } from "../controller/todos-controller";

export const publicRouter = express.Router();
publicRouter.post("/api/todos", TodosController.CreateTodos);
