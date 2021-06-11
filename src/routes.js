const express = require("express");

const routes = express.Router();

const DashboardController = require("./controllers/DashboardController");
const AboutController = require("./controllers/AboutController");
const RecipesController = require("./controllers/RecipesController");
const AdminRecipesController = require("./controllers/AdminRecipesController");

routes.get("/", DashboardController.index);

routes.get("/about", AboutController.index);

routes.get("/recipes", RecipesController.index);

routes.get("/recipes/:id", RecipesController.show);

routes.get("/admin/recipes", AdminRecipesController.index);

module.exports = routes;