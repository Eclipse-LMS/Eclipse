const { Error } = require('mongoose');
const User=require('../models/Users');
const sendEmail = require("../utils/sendEmail");
const crypto = require("crypto");

exports.register= async (req,res,next)=>{
    const {firstname,lastname,email,password}=req.body;
    try {
        var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
            if(!strongRegex.test(password)) {
                res.status(401).json({
                    success: false,
                    error: "User validation failed: password: Please provide a valid password"
                });
                return next();
            }
        const user = await User.create({
        firstname,lastname,email,password
        });
        res.status(201).json({
            success: true,
            token: user.getSignedToken()
        })
    } catch (error) {
        res.status(401).json({
            success: false,
            error: error.message
        })        
    }

}

exports.login= async (req,res,next)=>{
    const {email,password} = req.body;
        if (!email || !password){
            res.status(401).json({
                success:false,
                error: "Invalid email or password"
            });
            return next();
        }
    
    try {
        const user = await User.findOne({ email }).select("+password");

        if(!user){
            res.status(401).json({
                success: false,
                error: "User not found"
            });
            return next();
        }

        const isMatch = await user.matchPasswords(password);
        if (!isMatch){
            res.status(401).json({
                success: false,
                error: "Incorrect Password"
            });
            return next();
        }
        res.status(200).json({
            success: true,
            token: user.getSignedToken()
        });

    } catch (error) {
        res.status(200).json({
            success: false,
            error: error.message
        })
    }
}

exports.forgotpassword= async (req,res,next)=>{
    const {email} = req.body;

    try {
        const user = await User.findOne({ email });
        if(!user){
            throw new Error("Could not send Email");
        }
        const resetToken = user.generateResetToken();
        await user.save();
        
        const resetUrl = `http://localhost:3000/resetpassword/${resetToken}`;
        
        const message=`You have requested a password reset. Please follow the following link to reset your password.
            ${resetUrl}`;
        try {   
            const info = sendEmail({
                to:email,
                subject:'Eclipse Password Reset',
                text:message
            });
            res.status(200).json({
                success: true,
            });
        } catch (error) {
            res.status(401).json({
                success: false,
                error: error.message
            });
        }

    } catch (error) {
        res.status(401).json({
            success: false,
            error: "Could not send Email"
        });
    }
}

exports.resetpassword= async (req,res,next)=>{
    var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
        if(!strongRegex.test(req.body.password)) {
            res.status(401).json({
                success: false,
                error: "User validation failed: password: Please provide a valid password"
            });
            return next();
        }
    const resetToken = crypto.createHash("sha256").update(req.params.resetToken).digest("hex");
    try {
        const user = await User.findOne({
            resetPasswordToken: resetToken
        });
        if(!user){
            res.status(400).json({
                success: false,
                error: "Invalid reset token"
            });
            return next();
        }
        user.password = req.body.password;
        user.resetPasswordToken = undefined;
        user.resetPasswordLimit = undefined;
        await user.save();
        res.status(200).json({
            success: true
        });
        } catch (error) {
        res.status(400).json({
            success: false,
            error: "Invalid reset token"
        });
    }
}