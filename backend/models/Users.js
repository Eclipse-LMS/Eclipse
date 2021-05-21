const mongoose = require("mongoose");

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
        match: ["/^[\w!#$%&'*+/=?`{|}~^-]+(?:\.[\w!#$%&'*+/=?`{|}~^-]+)*@↵(?:[A-Z0-9-]+\.)+[A-Z]{2,6}$/","Please provide a valid email"]
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
});

const User= mongoose.model("User", UserSchema);

module.exports=User;