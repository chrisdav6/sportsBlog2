const express = require("express");
const router = express.Router();

//GET Articles
router.get("/", (req, res) => {
  res.render("articles");
});

module.exports = router;