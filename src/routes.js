const express = require("express");

const routes = express.Router();

const DashboardController = require("./controllers/DashboardController");
const AboutController = require("./controllers/AboutController");
const RecipesController = require("./controllers/RecipesController");

routes.get("/", DashboardController.index);

routes.get("/about", AboutController.index);

routes.get("/recipes", RecipesController.index);

module.exports = routes;