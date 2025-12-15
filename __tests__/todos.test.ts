import request from "supertest";
import app from "../src/server";
import { logger } from "../src/applications/logging";
describe("Test Todos API", () => {
  let todoId: string;
  it("should create a todo", async () => {
    const res = await request(app)
      .post("/api/todos")
      .send({ title: "Test Todo", description: "Test description" });
    logger.debug(res.body);
    expect(res.statusCode).toBe(201);
    expect(res.body.success).toBe(true);
    expect(res.body.data).toHaveProperty("id");
    todoId = res.body.data.id;
  });

  it("should get a list of todo", async () => {
    const res = await request(app).get("/api/todos");
    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);
    expect(Array.isArray(res.body.data)).toBe(true);
  });
});
