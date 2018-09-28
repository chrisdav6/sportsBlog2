const express = require("express");
const router = express.Router();

//GET Manage
router.get("/", (req, res) => {
  // req.flash('success', 'Flash Message Text!');
  res.render("manage", {
    flash: { success: req.flash("success") }
  });
});

module.exports = router;