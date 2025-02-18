const {
  selectComments,
  insertComment,
  insertReply,
} = require("../model/comments");
const getComments = async function (req, res) {
  const { entity_id, entity_type } = req.query;
  console.log(entity_id, entity_type);
  await selectComments(entity_id, entity_type)
    .then((result) => {
      res.json({
        code: 1,
        message: "获取成功",
        data: result,
      });
    })
    .catch((err) => {
      res.json({
        code: 2,
        message: err.message || "服务器内部错误，获取失败！",
      });
    });
};
const addComment = async function (req, res) {
  const { entity_type, entity_id, content } = req.body;
  const { username } = req.cookies;
  await insertComment(entity_id, entity_type, content, username)
    .then((result) => {
      res.json({
        code: 1,
        message: "评论成功",
        data: result,
      });
    })
    .catch((err) => {
      res.json({
        code: 0,
        message: err.message || "服务器内部错误，评论失败！",
      });
    });
};
const addReply = async function (req, res) {
  const { content, comment_id } = req.body;
  const { username } = req.cookies;
  await insertReply(comment_id, content, username)
    .then((result) => {
      res.json({
        code: 1,
        message: "回复成功",
        data: result,
      });
    })
    .catch((err) => {
      res.json({
        code: 0,
        message: err.message || "服务器内部错误，回复失败！",
      });
    });
};
module.exports = {
  getComments,
  addComment,
  addReply,
};
