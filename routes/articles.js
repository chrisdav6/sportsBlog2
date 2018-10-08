const express = require("express");
const router = express.Router();
const Article = require("../models/article");

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

//POST Add Article
router.post("/add", (req, res) => {
  let article = new Article();
  article.title = req.body.title;
  article.subtitle = req.body.subtitle;
  article.category = req.body.category;
  article.author = req.body.author;
  article.body = req.body.body;

  Article.addArticle(article, (err, article) => {
    if (err) {
      res.send(err);
    }

    res.redirect("/manage/articles");
  });
});

//POST Edit Article
router.post("/edit/:id", (req, res) => {
  let article = new Article();
  const query = { _id: req.params.id };
  const update = { 
    title: req.body.title, 
    subtitle: req.body.subtitle,
    category: req.body.category,
    author: req.body.author,
    body: req.body.body 
  };

  Article.updateArticle(query, update, {}, (err, article) => {
    if (err) {
      res.send(err);
    }

    res.redirect("/manage/articles");
  });
});

//DELETE Delete Article
router.delete("/delete/:id", (req, res) => {
  const query = { _id: req.params.id };

  Article.removeArticle(query, (err, article) => {
    if (err) {
      res.send(err);
    }

    res.sendStatus(200);
  });
});

module.exports = router;