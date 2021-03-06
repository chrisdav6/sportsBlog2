const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const flash = require("connect-flash");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || '3000';

const index = require("./routes/index");
const articles = require("./routes/articles");
const categories = require("./routes/categories");
const manage = require("./routes/manage");

//Connect to DB
const db = "mongodb://chris:chris6@ds117773.mlab.com:17773/sportsblog";
mongoose.connect(db, () => {
  console.log("Connected to DB");
});

//Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Setup Static Folders
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "views")));
app.use(express.static(path.join(__dirname, "node_modules")));

//Use EJS Template Engine
app.set("view engine", "ejs");

//Use moment
app.locals.moment = require("moment");

//Use connect-flash
app.use(cookieParser());
app.use(session({
  secret: 'secret123',
  saveUninitialized: true,
  resave: true
}));
app.use(flash());

//Routes
app.use("/", index);
app.use("/articles", articles);
app.use("/categories", categories);
app.use("/manage", manage);

//Start Server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});