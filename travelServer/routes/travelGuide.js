const express = require("express");
const {
  getTravelGuide: CGTG,
  getTravelGuideReply: CGTGR,
  addTravelGuideReply: CATGR,
} = require("../controller/travelGuide");
const {
  getTravelGuide: MGTG,
  getTravelGuideReply: MGTGR,
  addTravelGuideReply: MATGR,
} = require("../middleware/travelGuide");
const router = express.Router();
router.all("/", function (req, res) {
  res.json({
    msg: "Hello TravelGuide!",
  });
});
router.get("/getTravelGuide", MGTG, CGTG);
router.get("/getTravelGuideReply", MGTGR, CGTGR);
router.post("/addTravelGuideReply", MATGR, CATGR);
module.exports = router;
