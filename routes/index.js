const express = require("express");
const router = express.Router();

//GET HomePage
router.get("/", (req, res) => {
  res.render("index");
});

module.exports = router;