const express = require("express");
const router = express.Router();
const { getInsurancePlans: MGIP } = require("../middleware/insurancePlans");
const { getInsurancePlans: CGIP } = require("../controller/insurancePlans");
router.all("/", function (req, res) {
  res.json({
    msg: "Hello InsurancePlans!",
  });
});
router.get("/getInsurancePlans", MGIP, CGIP);
module.exports = router;
