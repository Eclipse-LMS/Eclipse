const express=require("express");
const router= express.Router();
const authenticate = require("../middleware/authenticate");
const {register, login, forgotpassword, resetpassword, logout}=require("../controller/auth");

router.route("/register").post(register);

router.route("/login").post(login);

router.route("/forgotpassword").post(forgotpassword);

router.route("/resetpassword/:resetToken").put(resetpassword);

router.route("/logout").post(logout);

module.exports=router;