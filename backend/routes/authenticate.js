const express=require("express");
const router= express.Router();
const {loggedin}=require("../controller/authenticate");

router.route("/loggedin").post(loggedin);

module.exports=router;