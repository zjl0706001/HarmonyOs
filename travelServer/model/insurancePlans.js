const db = require("../db/travelDatabase");

const selectInsurancePlans = async function () {
  const [rows] = await db.execute("SELECT * FROM insurance_plans");
  return rows;
};

module.exports = {
  selectInsurancePlans,
};
