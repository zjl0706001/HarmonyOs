const {
  selectTravelGuide,
  selectTravelGuideReply,
  insertTravelGuideReply,
} = require("../model/travelGuide");
const getTravelGuide = async function (req, res) {
  let { page } = req.query;
  if (!page) page = 1;
  await selectTravelGuide(page)
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
const getTravelGuideReply = async function (req, res) {
  const { id } = req.query;

  await selectTravelGuideReply(id)
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
const addTravelGuideReply = async function (req, res) {
  const { id, content } = req.body;
  const { username } = req.cookies;
  await insertTravelGuideReply(id, content, username)
    .then((result) => {
      res.json({
        code: 1,
        message: "回复成功",
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
module.exports = {
  getTravelGuide,
  getTravelGuideReply,
  addTravelGuideReply,
};
