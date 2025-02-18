const express = require("express");
const cookieParse = require("cookie-parser");
let app = express();
app.use(cookieParse());
app.get("/", function (req, res) {
  res.cookie("user", "zf777px", { maxAge: 1000 * 60 * 60 * 24 });
  res.send("no have user cookie");
});
app.listen(8080, () => {
  console.log("server is running at http://localhost:8080");
});
