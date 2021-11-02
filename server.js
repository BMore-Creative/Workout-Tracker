const path = require("path");
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const routes = require("./routes");

const PORT = 3001;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

mongoose.connect("mongodb://localhost/workout", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.use(routes);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
