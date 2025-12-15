import fs from "fs/promises";
import path from "path";

const DB_PATH = path.join(__dirname, "../storage/todos.json");

export async function read<T>(): Promise<T[]> {
  const data = await fs.readFile(DB_PATH, "utf-8");
  return JSON.parse(data);
}

export async function write<T>(data: T[]): Promise<void> {
  await fs.writeFile(DB_PATH, JSON.stringify(data, null, 2));
}
