const express = require("express");
const router = express.Router();
const Category = require("../models/category");

//GET Categories
router.get("/", (req, res) => {
  Category.getCategories((err, categories) => {
    if(err) {
      res.send(err);
    }

    res.render("categories", {
      title: "Categories",
      categories: categories,
      flash: { success: req.flash("success") }
    });
  });
});

//POST Add Category
router.post("/add", (req, res) => {
  let category = new Category();
  category.title = req.body.title;
  category.description = req.body.description;

  Category.addCategory(category, (err, category) => {
    if(err) {
      res.send(err);
    }

    res.redirect("/manage/categories");
  });
});

//POST Edit Category
router.post("/edit/:id", (req, res) => {
  let category = new Category();
  const query = { _id: req.params.id };
  const update = { title: req.body.title, description: req.body.description };

  Category.updateCategory(query, update, {}, (err, category) => {
    if (err) {
      res.send(err);
    }

    res.redirect("/manage/categories");
  });
});

module.exports = router;