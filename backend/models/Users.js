const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const crypto= require("crypto");

const UserSchema= new mongoose.Schema({
    firstname: {
        type: String,
        required: [true, "Please provide first name"]
    },
    lastname: {
        type: String,
        required: [true, "Please provide last names"]
    },
    email: {
        type: String,
        required: [true, "Please provide an email"],
        unique: true,
        
        match: [/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,"Please provide a valid email"]
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
        select: false
    },
    classroomsEnrolled: {
        type: [mongoose.SchemaTypes.ObjectId],
        default: []
    },
    classroomsHosted: {
        type: [mongoose.SchemaTypes.ObjectId],
        default: []
    },
    classroomsJoined: {
        type: [mongoose.SchemaTypes.ObjectId],
        default: []
    },
    savedNotes: {
        type: [mongoose.SchemaTypes.ObjectId],
        default: []
    },
    recievedInvites: {
        type: [{
            sender: mongoose.SchemaTypes.ObjectId,
            time: mongoose.SchemaTypes.Date
        }],
        default: []
    },
    resetPasswordToken: String,
    resetPasswordLimit: Date
},{
    timestamp: true
});

UserSchema.pre("save", async function(next){
    if(!this.isModified("password")){
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.matchPasswords= async function(password){
    return await bcrypt.compare(password,this.password);
}

UserSchema.methods.getSignedToken = function(){
    return jwt.sign({id: this._id}, process.env.JWT_SECRET);
}

UserSchema.methods.generateResetToken = function(){
    const resetToken = crypto.randomBytes(20).toString("hex");
    this.resetPasswordToken= crypto.createHash("sha256").update(resetToken).digest("hex");
    this.resetPasswordLimit= Date.now() + 20 * (60 * 1000);
    return resetToken;    
}

const User= mongoose.model("User", UserSchema);

module.exports=User;