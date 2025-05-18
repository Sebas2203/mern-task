// Load environment variables from .env file
import dotenv from "dotenv";
dotenv.config(); // Load environment variables from .env file

export const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost/testdb";
export const PORT = process.env.PORT || 5000; // Default port is 3000
