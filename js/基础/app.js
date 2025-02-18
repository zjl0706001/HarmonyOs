const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const app = express();
app.use(
  "/api",
  createProxyMiddleware({
    target: "https://api.m.jd.com",
    changeOrigin: true,
    pathRewrite: {
      "^/api": "",
    },
  }),
);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
