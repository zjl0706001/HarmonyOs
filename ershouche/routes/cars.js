const express = require("express");
const {
  brandsInfo: MBI,
  cityNumber: MCN,
  brands: MBS,
  series: MSS,
  carsBySeries: MCS,
  search: MSH,
  cars: MCARS,
} = require("../middleware/cars");
const {
  brandsInfo: CBI,
  cityNumber: CCN,
  brands: CBS,
  series: CSS,
  carsBySeries: CCS,
  search: CSH,
  cars: CCARS,
} = require("../controller/cars");
const router = express.Router();
router.get("/brandsInfo", MBI, CBI);
router.get("/cityNumber", MCN, CCN);
router.get("/brands", MBS, CBS);
router.get("/series", MSS, CSS);
router.get("/carsBySeries", MCS, CCS);
router.get("/search", MSH, CSH);
router.get("/cars", MCARS, CCARS);
module.exports = router;
