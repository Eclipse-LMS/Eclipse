const jwt = require("jsonwebtoken");
const User = require("../models/Users");

exports.protect = async (req,res,next)=>{
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
        token = req.headers.authorization.split(" ")[1];
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