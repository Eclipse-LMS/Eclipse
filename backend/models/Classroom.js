const mongoose = require("mongoose");
const validator = require("validator");
const User = require("./Users");

const ClassroomSchema = new mongoose.Schema({

    classroomName : {
        type: String,
        required : [true , "Please Add Classroom Name"],
        // default : []
    },

    hostedBy : {
        type:mongoose.SchemaTypes.ObjectId,
        ref:'User',
        required : [true , "User Undefined" ],
        // default : []
    }

})


const Classroom = new mongoose.model("Classroom",ClassroomSchema);

module.exports = Classroom;