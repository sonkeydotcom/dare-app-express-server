// const express = require("express");
import express from "express";

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Welcome to the API!");
});

const port = 3000; // Define the port variable

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
