const express = require("express");
const { verifytoken } = require("../utils/token");
const router = express.Router();

router.get("/", function (req, res, next) {
  let { token } = req.headers;
  verifytoken(token)
    .then((data) => {
      res.render("index", { title: "二手车管理平台", info: data });
    })
    .catch((err) => {
      console.error(err);
      res.send({ message: err.message || "服务器内部错误，验证失败！" });
    });
});

module.exports = router;
