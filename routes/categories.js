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

module.exports = router;