const express = require("express");
const router = express.Router();
router.get("/", function (req, res) {
  return res.render("index.html", { title: "Index" });
});
router.get("/index", function (req, res) {
  return res.render("index.html", { title: "Index" });
});
router.get("/login", function (req, res) {
  return res.render("login.html");
});
router.get("/register", function (req, res) {
  return res.render("register.html");
});
module.exports = router;
