const mongoose = require("mongoose");

//Article Schema
const articleSchema = mongoose.Schema({
  title: {
    type: String
  },
  subtitle: {
    type: String
  },
  category: {
    type: String
  },
  body: {
    type: String
  },
  author: {
    type: String
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  comments: [{
    comment_name: {
      type: String
    },
    comment_body: {
      type: String
    },
    comment_date: {
      type: Date,
      defualt: Date.now
    }
  }]
});

const Article = module.exports = mongoose.model("Article", articleSchema);

//Get Articles
module.exports.getArticles = (callback, limit) => {
  Article.find(callback).limit(limit).sort([["title", "ascending"]]);
};

//Get Article by Category
module.exports.getCategoryArticles = (categoryId, callback) => {
  let query = { category : categoryId };
  Article.find(query, callback).sort([["title", "ascending"]]);
};

//Add Article
module.exports.addArticle = (article, callback) => {
  Article.create(article, callback);
};

//Get Single Article by Id
module.exports.getArticleById = (id, callback) => {
  Article.findById(id, callback);
};

//Update Single Article
module.exports.updateArticle = (query, update, options, callback) => {
  Article.findOneAndUpdate(query, update, options, callback);
};

//Remove Article
module.exports.removeArticle = (query, callback) => {
  Article.deleteOne(query, callback);
};

//Add Comment
module.exports.addComment = (query, comment, callback) => {
  Article.update(query,
    {
      $push: {
        comments: comment
      }
    },
    callback
  );
};