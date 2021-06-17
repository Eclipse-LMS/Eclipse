const express = require("express");
const router = express.Router();

const {create, bycid, byuser, byhost, bystudent, list, Delete, update } = require("../controller/classrooms");

router.route("/create").post(create);

router.route("/bycid/:id").get(bycid);    

router.route("/byuser/:id").get(byuser);

router.route("/byhost/:id").get(byhost);

router.route("/bystudent/:id").get(bystudent);

router.route("/list").get(list);

router.route("/delete/:id").delete(Delete);

router.route("/update/:id").patch(update);


module.exports = router;