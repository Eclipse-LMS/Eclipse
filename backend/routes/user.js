const express = require("express");
const { create } = require("../models/Classroom");
const router = express.Router();

const {joinclassroom } = require("../controller/user");

router.route("/joinclassroom").post(joinclassroom);

module.exports = router;