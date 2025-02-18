const { searchHotels: MSH } = require("../middleware/hotels");
const { searchHotels: CSH } = require("../controller/hotels");
const { searchScenicSpots: MSSS } = require("../middleware/scenicSpots");
const { searchScenicSpots: CSSS } = require("../controller/scenicSpots");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    if (req.query.type === "hotel") {
      await MSH(req, res);
      await CSH(req, res);
    } else if (req.query.type === "scenicSpot") {
      await MSSS(req, res);
      await CSSS(req, res);
    } else {
      res.json({
        code: 2,
        message: "参数错误",
      });
    }
  } catch (error) {
    res.json({ code: 0, msg: error.message || "服务器内部错误，获取失败！" });
  }
});

module.exports = router;
