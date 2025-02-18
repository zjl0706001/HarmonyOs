const regexp = require("../utils/regexp");
const getTrainTicketsList = async (req, res, next) => {
  const { time, from, go } = req.query;
  if (!time || !from || !go)
    return res.json({ message: "请填写完整信息！", code: 2 });
  if (!regexp.time.test(time))
    return res.json({ message: "请填写正确的时间格式！", code: 2 });
  next();
};
module.exports = {
  getTrainTicketsList,
};
