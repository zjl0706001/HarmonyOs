const { verifytoken } = require("../utils/token");
const getComments = async function (req, res, next) {
  const { entity_type, entity_id } = req.query;
  if (
    !entity_type ||
    (entity_type !== "hotel" && entity_type !== "scenicSpot")
  ) {
    return res.json({
      code: 2,
      message: "参数错误",
    });
  }
  if (!entity_id) {
    return res.json({
      code: 2,
      message: "参数错误",
    });
  }
  next();
};
const addComment = async function (req, res, next) {
  if (!req.body)
    return res.json({
      code: 2,
      message: "参数错误",
    });
  const { entity_type, entity_id, content } = req.body;
  if (!entity_type || !entity_id || !content)
    return res.json({
      code: 2,
      message: "参数错误",
    });
  const { username, token } = req.cookies;
  if (!(username || token)) return res.json({ message: "缺少参数！", code: 2 });
  await verifytoken(token)
    .then((data) => {
      if (data.username !== username)
        return res.json({ message: "token错误！", code: 0 });
      next();
    })
    .catch((err) => {
      console.log(err);
      return res.json({
        code: 0,
        message: err ? err.message : "token错误或已过期！",
      });
    });
};
const addReply = async function (req, res, next) {
  if (!req.body)
    return res.json({
      code: 2,
      message: "参数错误",
    });
  const { content, comment_id } = req.body;
  if (!content || !comment_id)
    return res.json({
      code: 2,
      message: "参数错误",
    });
  const { username, token } = req.cookies;
  if (!(username || token)) return res.json({ message: "缺少参数！", code: 2 });
  await verifytoken(token)
    .then((data) => {
      if (data.username !== username)
        return res.json({ message: "token错误！", code: 0 });
      next();
    })
    .catch((err) => {
      console.log(err);
      return res.json({
        code: 0,
        message: err ? err.message : "token错误或已过期！",
      });
    });
};
module.exports = {
  getComments,
  addComment,
  addReply,
};
