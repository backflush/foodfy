const express = require("express");

const routes = express.Router();

const DashboardController = require("./controllers/DashboardController");
const AboutController = require("./controllers/AboutController");

routes.get("/", DashboardController.index);

routes.get("/about", AboutController.index);

module.exports = routes;