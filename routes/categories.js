const express = require("express");
const router = express.Router();

//GET Categories
router.get("/", (req, res) => {
  res.render("categories", {
    title: "Categories",
    flash: { success: req.flash("success") }
  });
});

module.exports = router;