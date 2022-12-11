const express = require("express");
const router = express.Router();

const statisticController = require("../app/controller/statisticController");
const checkToken = require("../middlewares/checkToken");

// Get Statistic
router.get("/", checkToken.verifyTokenAdmin, statisticController.getStatistic);

module.exports = router;
