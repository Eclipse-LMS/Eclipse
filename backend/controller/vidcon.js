const { Error } = require('mongoose');
const PeerUser = require('../models/PeerUser');
const Rooms = require('../models/Rooms');
const jwt = require("jsonwebtoken");
const User = require("../models/Users");

exports.user = async(req,res) => {
    resp = await PeerUser.findOne({ peerId: req.query.peer }).exec();
    console.log(resp);
    res.json({
        user: resp
    });
}

exports.newMeeting = async(req,res) => {
    res.redirect(`/${uuidV4()}`);
}

exports.videoRoom = async(req,res) => {
    console.log(req.query.token,req.query.room);
    const roomData = await Rooms.findOne({ roomId: req.query.room }).exec();
    var user = {firstname: "Guest"};
    let token = req.query.token
    if(token)
    {const decoded = jwt.verify(token,process.env.JWT_SECRET);
    user = await User.findById(decoded.id, (err,result) => {
        if(err){
            res.status(500).json({
                success: false,
                error: "User not found"
            });
            return;
        }
    });
    }
    res.render("room", {
      tabName: "Eclipse Vidcon",
      count: roomData ? roomData.count : 0,
      layout: "layouts/videoLayout",
      roomId: req.query.room,
      screen: req.query.screen,
      user: user,
    });
}