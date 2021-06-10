const data = require("../../data");

module.exports = {
    index(req, res) {
        res.render("recipes", {
            data: data
        });
    },

    show(req, res) {
        res.render("recipe-show", {
            data: data
        });
    }
}