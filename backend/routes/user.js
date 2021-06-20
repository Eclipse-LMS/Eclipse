const express = require("express");
const { create } = require("../models/Dashboard");
const router = express.Router();

const {joinclassroom } = require("../controller/user");

router.route("/joinclassroom").post(joinclassroom);

module.exports = router;