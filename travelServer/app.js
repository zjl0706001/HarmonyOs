const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const usersRouter = require("./routes/users");
const scenicSpotsRouter = require("./routes/scenicSpots");
const ticketsRouter = require("./routes/tickets");
const hotelsRouter = require("./routes/hotels");
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
// 用户相关api
app.use("/api/users", usersRouter);
// 景点相关api
app.use("/api/scenicSpots", scenicSpotsRouter);
// 酒店相关api
// app.use("/api/hotels", hotelsRouter);
// 车票
app.use("/api/tickets", ticketsRouter);
// 酒店
app.use("/api/hotels", hotelsRouter);
// 搜索
app.use("/api/search", require("./routes/search"));
// 保险
app.use("/api/insurancePlans", require("./routes/insurancePlans"));
// 评论
app.use("/api/comments", require("./routes/comments"));
//旅行攻略
app.use("/api/travelGuide", require("./routes/travelGuide"));
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
