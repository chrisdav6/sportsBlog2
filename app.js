const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || '3000';

//Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Setup Static Folders
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "views")));
app.use(express.static(path.join(__dirname, "node_modules")));

//Use EJS Template Engine
app.set("view engine", "ejs");

//Routes
app.get("/", (req, res) => {
  res.render("index");
});

//Start Server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});