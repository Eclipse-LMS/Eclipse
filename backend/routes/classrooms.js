const express = require("express");
const router = express.Router();

const {create, bycid } = require("../controller/classrooms");

router.route("/create").post(create);

router.route("/bycid/:id").get(bycid);


module.exports = router;