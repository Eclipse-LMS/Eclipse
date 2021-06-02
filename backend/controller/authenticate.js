exports.loggedin = (req, res, next)=>{
    if (req.user){
        res.status(201).json({
            success: true,
            user: req.user
        });
        return next();
    }
    res.status(400).json({
        success: false
    });
}