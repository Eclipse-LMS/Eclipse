const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

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
    forgotPasswrodToken: String,
    forgotPasswrodLimit: Date
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

const User= mongoose.model("User", UserSchema);

module.exports=User;