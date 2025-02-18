const { getTrainTicketsList: GTTL } = require("../utils/api");
const getTrainTicketsList = async (req, res) => {
  const { time, from, go } = req.query;
  GTTL(time, from, go)
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
  getTrainTicketsList,
};
