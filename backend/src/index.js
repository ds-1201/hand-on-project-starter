const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
dotenv.config();

const AuthRouter = require("./routes/auth.router");

const app = express();

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error Connecting to database: " + err.message);
  });

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cookieParser());
app.use(cors());
app.use("/auth", AuthRouter);

app.get("/hello-world", (req, res) => {
  return res.send("Hello World");
});

app.listen(process.env.PORT, () => {
  console.log("Backend server started at PORT", process.env.PORT);
});
