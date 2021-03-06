const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const mongojs = require("mongojs");
const path = require("path");

const app = express();
app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

const PORT = process.env.PORT || 3002;



mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useFindAndModify: false
});

// routes
app.use(require("./routes/htmlRoutes.js"));
app.use(require("./routes/api.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
