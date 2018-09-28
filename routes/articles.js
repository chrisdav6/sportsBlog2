const express = require("express");
const router = express.Router();

//GET Articles
router.get("/", (req, res) => {
  res.render("articles", {
    title: "Articles",
    flash: { success: req.flash("success") }
  });
});

module.exports = router;