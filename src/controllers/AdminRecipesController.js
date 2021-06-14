const data = require("../../data");

module.exports = {
    index(req, res) {
        res.render("admin/index", {
            data: data
        });
    },
}