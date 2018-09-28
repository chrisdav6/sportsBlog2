const express = require("express");
const router = express.Router();

//GET Manage
router.get("/", (req, res) => {
  // req.flash('success', 'Flash Message Text!');
  res.render("manage", {
    title: "Manage",
    flash: { success: req.flash("success") }
  });
});

//GET Manage Form
router.get("/articles/add", (req, res) => {
  res.render("add_article", {
    title: "Create Article",
    flash: { success: req.flash("success") }
  });
});

module.exports = router;