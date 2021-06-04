const express = require("express");

const routes = express.Router();

routes.get("/", (req, res) => {
    res.send("It's OK");
});

module.exports = routes;