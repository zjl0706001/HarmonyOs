const { selectInsurancePlans } = require("../model/insurancePlans");

const getInsurancePlans = async function (req, res) {
  try {
    const result = await selectInsurancePlans();
    res.json({
      code: 1,
      message: "查询成功",
      data: result,
    });
  } catch (err) {
    res.json({
      code: 0,
      message: err.message || "查询失败",
    });
  }
};

module.exports = {
  getInsurancePlans,
};
