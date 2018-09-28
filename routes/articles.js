const express = require("express");
const router = express.Router();

//GET Articles
router.get("/", (req, res) => {
  res.render("articles", {
    title: "Articles",
    flash: { success: req.flash("success") }
  });
});

//GET Show single article
router.get("/show/:id", (req, res) => {
  res.render("article", {
    title: "Article",
    flash: { success: req.flash("success") }
  });
});

//GET category articles
router.get("/category/:category_id", (req, res) => {
  res.render("articles", {
    title: "Category Articles",
    flash: { success: req.flash("success") }
  });
});

module.exports = router;