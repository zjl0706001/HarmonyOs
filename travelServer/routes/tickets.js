const express = require("express");
const router = express.Router();
const { getTrainTicketsList: MGTTL } = require("../middleware/tickets");
const { getTrainTicketsList: CGTTL } = require("../controller/tickets");
router.all("/", function (req, res) {
  res.json({
    msg: "Hello Tickets!",
  });
});
router.get("/getTrainTicketsList", MGTTL, CGTTL);
module.exports = router;
