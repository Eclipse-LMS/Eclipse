const express = require("express");
const router = express.Router();

const {index,videoRoom,newMeeting,user} = require("../controller/vidcon");

router.route("/user").get(user);

router.route("/new-meeting").get(newMeeting);

router.route("/").get(videoRoom);

module.exports = router;