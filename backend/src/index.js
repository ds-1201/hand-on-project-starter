const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

app.get("/hello-world", (req, res) => {
  return res.send("Hello World");
});

app.listen(process.env.PORT, () => {
  console.log("Backend server started at PORT", process.env.PORT);
});
