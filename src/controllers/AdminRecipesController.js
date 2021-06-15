const data = require("../../data");

module.exports = {
    index(req, res) {
        res.render("admin/index", {
            data: data
        });
    },

    create(req, res) {
        res.render("admin/create");
    },
}