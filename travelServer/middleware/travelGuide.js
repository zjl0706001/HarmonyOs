const { verifytoken } = require("../utils/token");
const getTravelGuide = async function (req, res, next) {
  next();
};
const getTravelGuideReply = async function (req, res, next) {
  if (isNaN(req.query.id))
    return res.json({
      code: 2,
      message: "参数错误",
    });
  next();
};
const addTravelGuideReply = async function (req, res, next) {
  if (!req.body)
    return res.json({
      code: 2,
      message: "参数错误",
    });
  const { id, content } = req.body;
  if (!id || !content)
    return res.json({
      code: 2,
      message: "参数错误",
    });
  const { username, token } = req.cookies;
  if (!username) return res.json({ message: "缺少参数！", code: 2 });
  if (!token) return res.json({ message: "请先登录！", code: 2 });
  await verifytoken(token)
    .then((data) => {
      if (data.username !== username)
        return res.json({ message: "token错误！", code: 0 });
      next();
    })
    .catch((err) => {
      return res.json({
        message: err ? err.message : "token错误或已过期！",
        code: 0,
      });
    });
};
module.exports = {
  getTravelGuide,
  getTravelGuideReply,
  addTravelGuideReply,
};
