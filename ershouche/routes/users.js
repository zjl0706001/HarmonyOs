const express = require("express");
const {
  login: MLG,
  register: MRG,
  loginout: MLGO,
  info: MIF,
  alterpassword: MAP,
  alterinfo: MAI,
  removeuser: MRU,
  getusers: MUS,
  toadmin: MTA,
} = require("../middleware/users");
const {
  login: CLG,
  register: CRG,
  loginout: CLGO,
  info: CIF,
  alterpassword: CAP,
  alterinfo: CAI,
  removeuser: CRU,
  getusers: CUS,
  toadmin: CTA,
} = require("../controller/users");
const router = express.Router();

router.all("/", function (req, res) {
  res.send(null);
});
router.post("/login", MLG, CLG);
router.post("/register", MRG, CRG);
router.post("/loginout", MLGO, CLGO);
router.post("/info", MIF, CIF);
router.post("/alterpassword", MAP, CAP);
router.post("/alterinfo", MAI, CAI);
router.post("/removeuser", MRU, CRU);
router.get("/users", MUS, CUS);
router.post("/toadmin", MTA, CTA);
module.exports = router;
