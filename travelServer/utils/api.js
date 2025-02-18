const axios = require("axios");
const { nameMap } = require("./abbrOfCity");
const getTrainTicketsList = (time, from, go) => {
  return axios
    .get(
      `https://kyfw.12306.cn/otn/leftTicketPrice/query?leftTicketDTO.train_date=${time}&leftTicketDTO.from_station=${nameMap[from]}&leftTicketDTO.to_station=${nameMap[go]}&randCode=`,
    )
    .then((res) => {
      return res.data;
    });
};
module.exports = {
  getTrainTicketsList,
};
