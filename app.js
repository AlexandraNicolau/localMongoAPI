var createError = require("http-errors");
var express = require("express");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var playersRouter = require("./routes/players");

var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/footballers", {
  useNewUrlParser: true
});

var app = express();

// view engine setup

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/players", playersRouter);

// catch 404 and forward to error handle`r
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send("error");
});

module.exports = app;
