const jwt = require("jsonwebtoken");
const User = require("../models/Users");


exports.protect = async (req,res,next)=>{
    try {
        let headers = req.body.headers;
        let token = headers.sessionToken;
        if (!token){
            res.status(401).json({
                success: false,
                error: "Unauthorised Access"
            });
        return;
        }
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        const user = await User.findById(decoded.id, (err,result) => {
            if(err){
                res.status(500).json({
                    success: false,
                    error: "User not found"
                });
                return;
            }
        });
        req.user=user;
        next();
    } catch (error) {
        res.status(500).json({
            success: false,
            error: "Unauthorised Access"
        });
        return;
    }

} 