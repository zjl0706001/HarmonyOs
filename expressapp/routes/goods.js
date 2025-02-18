const express = require("express");
const router = express.Router();

const {
  getgoodslist,
  deletegoods,
  addgoods,
  altergoods,
} = require("../middleware/goods");

router.get("/", getgoodslist);
router.post("/", addgoods);
router.delete("/:id", deletegoods);
router.patch("/", altergoods);
module.exports = router;
