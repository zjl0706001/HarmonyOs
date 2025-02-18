const express = require("express");
const {
  login: MLG,
  register: MRG,
  logout: MLO,
  getUserInfo: MGUI,
  deleteUser: MDU,
  updateUserInfo: MUUI,
  updatePassword: MUP,
  getCoupons: MGC,
  getEquityCards: MGEC,
  getOffsetRolls: MGOR,
  getOrder: MGO,
} = require("../middleware/users");
const {
  login: CLG,
  register: CRG,
  logout: CLO,
  getUserInfo: CGUI,
  deleteUser: CDU,
  updateUserInfo: CUUI,
  updatePassword: CUP,
  getCoupons: CGC,
  getEquityCards: CGEC,
  getOffsetRolls: CGOR,
  getOrder: CGO,
} = require("../controller/users");
const router = express.Router();

router.all("/", function (req, res) {
  res.json({
    msg: "Hello User!",
  });
});
router.post("/login", MLG, CLG);
router.post("/register", MRG, CRG);
router.post("/logout", MLO, CLO);
router.delete("/deleteUser", MDU, CDU);
router.put("/updateUserInfo", MUUI, CUUI);
router.put("/updatePassword", MUP, CUP);
router.get("/getUserInfo", MGUI, CGUI);
router.get("/getCoupons", MGC, CGC);
router.get("/getEquityCards", MGEC, CGEC);
router.get("/getOffsetRolls", MGOR, CGOR);
router.get("/getOrder", MGO, CGO);

module.exports = router;
