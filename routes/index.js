const express = require("express");
const router = express.Router();
const Article = require("../models/article");

//GET HomePage
router.get("/", (req, res) => {
  
  Article.getArticles((err, articles) => {
    if(err) {
      res.send(err);
    }

    res.render("index", {
      title: "Index",
      articles: articles,
      flash: { success: req.flash("success") }
    });
  }, 2);
});

module.exports = router;