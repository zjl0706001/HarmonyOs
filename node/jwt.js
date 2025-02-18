const express = require("express");
const cors = require("cors");
let app = express();

app.use(cors());

app.get("/:id", function (req, res) {
  res.send({
    protocol: req.protocol,
    hostname: req.hostname,
    params: req.params,
    query: req.query,
    url: req.url,
    path: req.path,
    originalUrl: req.originalUrl,
  });
});

app.listen(8080, function () {
  console.log("服务已启动，监听 http://localhost:8080");
});
