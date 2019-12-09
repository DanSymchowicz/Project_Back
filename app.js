var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

// connexion mongooooo
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const dbName = "DashboardProject";
const dbURL = `mongodb://localhost:27017/${dbName}`;

mongoose.connect(dbURL, {
    useNewUrlParser: true
});

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;

