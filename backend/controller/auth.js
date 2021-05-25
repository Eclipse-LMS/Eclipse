const { Error } = require('mongoose');
const User=require('../models/Users');

exports.register= async (req,res,next)=>{
    const {firstname,lastname,email,password}=req.body;
    try {
        var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
            if(!strongRegex.test(password)) {
            throw new Error("Enter Valid Password")}
            const user = await User.create({
            firstname,lastname,email,password
        });
        res.status(201).json({
            success: true,
            user
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        })        
    }

}

exports.login=(req,res,next)=>{
    res.send("Login Route");
}

exports.forgotpassword=(req,res,next)=>{
    res.send("Forgot Password Route");
}

exports.resetpassword=(req,res,next)=>{
    res.send("Reset Password Route");
}