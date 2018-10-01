const express = require("express");
const router = express.Router();
const Category = require("../models/category");

//GET View Articles to Manage
router.get("/articles", (req, res) => {
  res.render("manage_articles", {
    title: "Manage Articles",
    flash: { success: req.flash("success") }
  });
});

//GET Show Add Articles Form
router.get("/articles/add", (req, res) => {
  Category.getCategories((err, categories) => {
    if(err) {
      res.send(err);
    }

    res.render("add_article", {
      title: "Create Article",
      categories: categories,
      flash: { success: req.flash("success") }
    });
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
  Category.getCategories((err, categories) => {
    if (err) {
      res.send(err);
    }

    res.render("manage_categories", {
      title: "Manage Categories",
      categories: categories,
      flash: { success: req.flash("success") }
    });
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
  Category.getCategoryById(req.params.id, (err, category) => {
    if (err) {
      res.send(err);
    }

    res.render("edit_category", {
      title: "Edit Category",
      category: category,
      flash: { success: req.flash("success") }
    });
  });
});

module.exports = router;