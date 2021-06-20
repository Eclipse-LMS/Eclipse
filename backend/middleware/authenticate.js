const jwt = require("jsonwebtoken");
const User = require("../models/Users");


exports.protect = async (req,res,next)=>{
    console.log("use");
    let token;
    if (req.signedCookies.token && req.signedCookies.token.startsWith("Bearer")){
        token = req.signedCookies.token.split(" ")[1];
        console.log(token);
    }
    if (!token){
        res.status(401).json({
            success: false,
            error: "Unauthorised Access"
        });
        return;
    }
    try {
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        const user = await User.findById(decoded.id);
        if (!user){
            res.status(404).json({
                success: false,
                error: "User not found"
            });
            return;
        }
        req.user=user;
        
        next();
    } catch (error) {
        res.status(401).json({
            success: false,
            error: "Unauthorised Access"
        });
        return;
    }

} 