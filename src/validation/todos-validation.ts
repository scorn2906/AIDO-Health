import { z, ZodType } from "zod";
export class TodosValidation {
  static readonly createTodoSchema: ZodType = z.object({
    title: z.string().min(1, "title is required"),
    status: z.enum(["pending", "done"]).optional(),
  });

  static readonly updateTodoSchema: ZodType = z.object({
    // status: z.enum(["pending", "done"], {
    //   required_error: "status is required",
    //   invalid_type_error: "status must be pending or done",
    // }),
    status: z
      .string()
      .min(1, "status is required")
      .refine(
        (val) => val === "pending" || val === "done",
        "status must be pending or done"
      ),
  });
}
