import express from "express";
// const bodyParser = require("body-parser");

// const authRoutes = require("./routes/authRoutes");
// const userRoutes = require("./routes/userRoutes");

const app = express();

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// app.use("/api/auth", authRoutes);
// app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the API!");
});

export default app;
