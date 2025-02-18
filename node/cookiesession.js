const cookiesession = require("cookie-session");
const express = require("express");
const app = express();
app.use(
  cookiesession({
    name: "session",
    secret: "keyboard cat",
    // keys: ["key1", "key2"],
    maxAge: 24 * 60 * 60 * 1000,
  }),
);
app.get("/", (req, res) => {
  console.log(req.session);
  req.session.viewss = (req.session.viewss || 0) + 1;
  res.send(`第${req.session.viewss}次访问`);
});
app.listen(3000, () => {
  console.log("server is running at http://localhost:3000");
});
