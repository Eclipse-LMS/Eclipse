var util = require('util');

exports.loggedin = (req, res)=>{
    if (req.user){
        res.status(201).json({
            success: true,
            user: req.user,
        });
        return;
    }
    res.status(400).json({
        success: false
    });
}