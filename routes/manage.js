const express = require("express");
const router = express.Router();
const Category = require("../models/category");
const Article = require("../models/article");

//GET View Articles to Manage
router.get("/articles", (req, res) => {
  Article.getArticles((err, articles) => {
    if (err) {
      res.send(err);
    }

    res.render("manage_articles", {
      title: "Articles",
      articles: articles,
      flash: { success: req.flash("success") }
    });
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
  Article.getArticleById(req.params.id, (err, article) => {
    if (err) {
      res.send(err);
    }

    Category.getCategories((err, categories) => {
      if (err) {
        res.send(err);
      }

      res.render("edit_article", {
        title: "Edit Article",
        article: article,
        categories: categories,
        flash: { success: req.flash("success") }
      });
    });
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