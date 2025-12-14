import express from "express";
import { publicRouter } from "./route/public-api";
import { errorMiddleware } from "./middleware/error-middleware";

const app = express();

app.use(express.json());
app.use(publicRouter);
app.use(errorMiddleware);

// app.get("/", (req, res) => {
//   res.send("Hello, World!");
// });

export default app;
