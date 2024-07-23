import dotenv from "dotenv";

dotenv.config();

export const config = {
  port: process.env.PORT || 5000,
  dbUri: process.env.DB_URI || "mongodb://localhost:27017/myapp",
};
