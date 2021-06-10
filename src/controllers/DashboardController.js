const data = require("../../data");

module.exports = {
    index(req, res) {
        return res.render("index", {
            data: data
        });
    }
}