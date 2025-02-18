const {
  selectSpecialOffer,
  selectHotels,
  selectRecommend,
  selectHotelInfo,
} = require("../model/hotels");
const getSpecialOffer = async function (req, res) {
  selectSpecialOffer()
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
const searchHotels = async function (req, res) {
  selectHotels(req.query)
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
const getRecommend = async function (req, res) {
  console.log(req.query["city"]);
  selectRecommend(req.query["city"])
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
const getHotelInfo = async function (req, res) {
  selectHotelInfo(req.query["id"])
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
  getSpecialOffer,
  searchHotels,
  getRecommend,
  getHotelInfo,
};
