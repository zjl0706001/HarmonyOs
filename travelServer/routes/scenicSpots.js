const express = require("express");
const {
  getTopList: MGTL,
  getWantToList: MGWTL,
  getPlayfulSelection: MGPS,
  getScenicSpotInfo: MGSSI,
} = require("../middleware/scenicSpots");
const {
  getTopList: CGTL,
  getWantToList: CGWTL,
  getPlayfulSelection: CGPS,
  getScenicSpotInfo: CGSSI,
} = require("../controller/scenicSpots");
const router = express.Router();

router.all("/", function (req, res) {
  res.json({
    msg: "Index!",
  });
});
router.get("/getTopList", MGTL, CGTL);
router.get("/getWantToList", MGWTL, CGWTL);
router.get("/getPlayfulSelection", MGPS, CGPS);
router.get("/getScenicSpotInfo", MGSSI, CGSSI);
module.exports = router;
