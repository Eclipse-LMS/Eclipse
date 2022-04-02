const mongoose = require("mongoose");
const validator = require("validator");
const User = require("./Users");
const User = require("./Classroom");

const ClassroomJoinedSchema = new mongoose.Schema({

    classroom : {
        type: mongoose.SchemaTypes.ObjectId,
        ref : 'Classroom',
        required : [true , "Classroom ref undefined"]
    },

    user : {
        type:mongoose.SchemaTypes.ObjectId,
        ref:'User',
        required : [true , "User ref undefined"]
    }

})


const ClassroomJoined = new mongoose.model("ClassroomJoined",ClassroomJoinedSchema);

module.exports = ClassroomJoined;