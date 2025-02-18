const {
  selectTopList,
  selectWantToList,
  selectPlayfulSelection,
  selectScenicSpots,
  selectScenicSpotsInfo,
} = require("../model/scenicSpots");
const getTopList = async function (req, res) {
  await selectTopList()
    .then((data) => {
      res.json({ code: 1, data });
    })
    .catch((err) => {
      res.json({
        code: 0,
        message: err.message || "服务器内部错误，获取失败！",
      });
    });
};
const getWantToList = async function (req, res) {
  await selectWantToList()
    .then((data) => {
      res.json({ code: 1, data });
    })
    .catch((err) => {
      res.json({
        code: 0,
        message: err.message || "服务器内部错误，获取失败！",
      });
    });
};
const getPlayfulSelection = async function (req, res) {
  await selectPlayfulSelection()
    .then((data) => {
      res.json({ code: 1, data });
    })
    .catch((err) => {
      res.json({
        code: 0,
        message: err.message || "服务器内部错误，获取失败！",
      });
    });
};
const searchScenicSpots = async function (req, res) {
  selectScenicSpots(req.query)
    .then((data) => {
      res.json({ code: 1, data });
    })
    .catch((err) => {
      res.json({
        code: 0,
        message: err.message || "服务器内部错误，获取失败！",
      });
    });
};
const getScenicSpotInfo = async function (req, res) {
  const { id } = req.query;
  selectScenicSpotsInfo(id)
    .then((data) => {
      res.json({ code: 1, data });
    })
    .catch((err) => {
      res.json({
        code: 0,
        message: err.message || "服务器内部错误，获取失败！",
      });
    });
};
module.exports = {
  getTopList,
  getWantToList,
  getPlayfulSelection,
  searchScenicSpots,
  getScenicSpotInfo,
};
