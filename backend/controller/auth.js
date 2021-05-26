const { Error } = require('mongoose');
const User=require('../models/Users');

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
            user
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
            user
        });

    } catch (error) {
        res.status(200).json({
            success: false,
            error: error.message
        })
    }
}

exports.forgotpassword=(req,res,next)=>{
    res.send("Forgot Password Route");
}

exports.resetpassword=(req,res,next)=>{
    res.send("Reset Password Route");
}