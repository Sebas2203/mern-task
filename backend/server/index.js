import express from "express";
import postRoutes from "./routes/posts.routes.js";

const app = express();

app.use(postRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
