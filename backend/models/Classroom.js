const mongoose = require("mongoose");
const validator = require("validator");

const DashboardSchema = new mongoose.Schema({

    ClassroomName : {
        type: String,
        required : [true , "Please Add Classroom Name"],
        default : []
    },

    HostedBy : {
        type: mongoose.SchemaTypes.ObjectId,
        required : [true , "User Undefined" ],
        default : []
    },

    Students : {
        type: [mongoose.SchemaTypes.ObjectId],
        default : []
    }

})


const Dashboard = new mongoose.model("Dashboard",DashboardSchema);

module.exports = Dashboard;