const getSpecialOffer = async function (req, res, next) {
  next();
};

const searchHotels = async function (req, res) {
  const { city } = req.query;
  if (!city)
    return res.json({
      code: 2,
      message: "参数错误",
    });
};
const getRecommend = async function (req, res, next) {
  const { city } = req.query;
  if (!city)
    return res.json({
      code: 2,
      message: "参数错误",
    });
  next();
};
const getHotelInfo = async function (req, res, next) {
  const { id } = req.query;
  if (!id)
    return res.json({
      code: 2,
      message: "参数错误",
    });
  next();
};
module.exports = {
  getSpecialOffer,
  searchHotels,
  getRecommend,
  getHotelInfo,
};
