import app from "./app.js";
import { config } from "./config/config.js";
import connectDB from "./config/db.js";

const port = config.port;

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error("Database connection failed:", error);
    process.exit(1);
  });
