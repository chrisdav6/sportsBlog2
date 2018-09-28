const express = require("express");
const router = express.Router();

//GET HomePage
router.get("/", (req, res) => {
  // req.flash('success', 'Flash Message Text!');
  res.render("index", {
    title: "Index",
    flash: { success: req.flash("success") }
  });
});

module.exports = router;