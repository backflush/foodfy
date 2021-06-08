module.exports = {
    index(req, res) {
        res.render("recipes");
    },

    show(req, res) {
        res.render("recipe-show");
    }
}