const express = require("express");
const {
  getSpecialOffer: MGSO,
  getRecommend: MGR,
  getHotelInfo: MGHI,
} = require("../middleware/hotels");
const {
  getSpecialOffer: CGSO,
  getRecommend: CGR,
  getHotelInfo: CGHI,
} = require("../controller/hotels");
const router = express.Router();
router.all("/", function (req, res) {
  res.json({
    msg: "Hello Hotels!",
  });
});
router.get("/getSpecialOffer", MGSO, CGSO);
router.get("/getRecommend", MGR, CGR);
router.get("/getHotelInfo", MGHI, CGHI);
module.exports = router;
