import { z, ZodType } from "zod";
export class TodosValidation {
  static readonly CREATE_TODOS: ZodType = z.object({
    title: z.string().min(1, "title is required"),
    status: z.enum(["pending", "done"]),
  });
}
