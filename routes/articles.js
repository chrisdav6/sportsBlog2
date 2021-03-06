const express = require("express");
const router = express.Router();
const Article = require("../models/article");
const Category = require("../models/category");

//GET Articles
router.get("/", (req, res) => {
  Article.getArticles((err, articles) => {
    if (err) {
      res.send(err);
    }

    res.render("articles", {
      title: "Articles",
      articles: articles
    });
  });
});

//GET Show single article
router.get("/show/:id", (req, res) => {
  Article.getArticleById(req.params.id, (err, article) => {
    if(err) {
      res.send(err);
    }

    Category.getCategoryById(article.category, (err, category) => {
      if(err) {
        res.send(err);
      }

      res.render("article", {
        title: "Article",
        article: article,
        category: category,
        flash: { success: req.flash("success") }
      });
    });
  });
});

//GET category articles
router.get("/category/:category_id", (req, res) => {
  Article.getCategoryArticles(req.params.category_id, (err, articles) => {
    if(err) {
      res.send(err);
    }

    Category.getCategoryById(req.params.category_id, (err, category) => {
      if(err) {
        res.send(err);
      }

      res.render("articles", {
        title: `${category.title} Articles`,
        articles: articles
      });
    });
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

    req.flash('success', 'New article has been added!');
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

    req.flash('success', 'Article has been editted!');
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

    req.flash('success', 'Article has been deleted!');
    res.sendStatus(200);
  });
});

//POST Add Comment
router.post("/comments/add/:id", (req, res) => {
  let article = new Article();
  let query = { _id: req.params.id };
  let comment = {
    comment_name: req.body.name,
    comment_body: req.body.comment
  };

  Article.addComment(query, comment, (err, article) => {
    if (err) {
      res.send(err);
    }

    req.flash('success', 'New comment has been added!');
    res.redirect("/articles/show/" + req.params.id);
  });
});

module.exports = router;