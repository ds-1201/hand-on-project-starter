const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();

const app = express();

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error Connecting to database: " + err.message);
  });

app.get("/hello-world", (req, res) => {
  return res.send("Hello World");
});

app.listen(process.env.PORT, () => {
  console.log("Backend server started at PORT", process.env.PORT);
});
