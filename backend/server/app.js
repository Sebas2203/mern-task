//configuration of the express server
import express from "express";
import postRoutes from "./routes/posts.routes.js";

const app = express();

//middleware
app.use(express.json());

//routes
app.use(postRoutes);

export default app;
