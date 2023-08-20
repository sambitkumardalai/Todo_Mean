const express = require("express");
const morgan = require("morgan");
const todoRouter = require("./routes/todoRoutes");
const connection = require("./connection");
const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.use("/todo", todoRouter);

app.use("/", (req, res) => {
  return res.status(200).json({
    status: "success",
    message: "API working.",
  });
});

module.exports = app;
