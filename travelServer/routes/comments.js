const express = require("express");
const router = express.Router();
const {
  getComments: MGC,
  addComment: MAC,
  addReply: MAR,
} = require("../middleware/comments");
const {
  getComments: CGC,
  addComment: CAC,
  addReply: CAR,
} = require("../controller/comments");
router.all("/", function (req, res) {
  res.json({
    msg: "Hello Comments!",
  });
});
router.get("/getComments", MGC, CGC);
router.post("/addComment", MAC, CAC);
router.post("/addReply", MAR, CAR);
module.exports = router;
