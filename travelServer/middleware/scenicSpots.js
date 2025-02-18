const getTopList = (req, res, next) => {
  next();
};
const getWantToList = (req, res, next) => {
  next();
};
const getPlayfulSelection = (req, res, next) => {
  next();
};
const searchScenicSpots = async function (req, res) {
  const { city } = req.query;
  if (!city)
    return res.json({
      code: 2,
      message: "参数错误",
    });
};
const getScenicSpotInfo = async function (req, res, next) {
  const { id } = req.query;
  if (!id)
    return res.json({
      code: 2,
      message: "参数错误",
    });
  next();
};
module.exports = {
  getTopList,
  getWantToList,
  getPlayfulSelection,
  searchScenicSpots,
  getScenicSpotInfo,
};
