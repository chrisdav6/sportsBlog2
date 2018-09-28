const express = require("express");
const router = express.Router();

//GET View Articles to Manage
router.get("/articles", (req, res) => {
  res.render("manage_articles", {
    title: "Manage Articles",
    flash: { success: req.flash("success") }
  });
});

//GET Show Add Articles Form
router.get("/articles/add", (req, res) => {
  res.render("add_article", {
    title: "Create Article",
    flash: { success: req.flash("success") }
  });
});

//GET Show Edit Articles Form
router.get("/articles/edit/:id", (req, res) => {
  res.render("edit_article", {
    title: "Edit Article",
    flash: { success: req.flash("success") }
  });
});

//GET View Categories to Manage
router.get("/categories", (req, res) => {
  res.render("manage_categories", {
    title: "Manage Categories",
    flash: { success: req.flash("success") }
  });
});

//GET Show Add Categories Form
router.get("/categories/add", (req, res) => {
  res.render("add_category", {
    title: "Create Category",
    flash: { success: req.flash("success") }
  });
});

//GET Show Edit Categories Form
router.get("/categories/edit/:id", (req, res) => {
  res.render("edit_category", {
    title: "Edit Category",
    flash: { success: req.flash("success") }
  });
});

module.exports = router;