// DEPENDENCIES
const express = require("express");
const cors = require("cors");

// CONFIGURATION
const app = express();
app.use(cors());

// MIDDLEWARE
app.use(express.json());

// ROUTES
app.get("/", (request, res) => {
  res.send("Hello World");
});

const userController = require("./controllers/userController");
const productsController = require("./controllers/productsController");

app.use("/users", userController);
app.use("/products", productsController);


module.exports = app;
