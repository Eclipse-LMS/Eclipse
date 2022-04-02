const mongoose = require("mongoose");
const Rooms = mongoose.Schema({
    roomId: {
        type: String,
        require: true,
    },
    userId: {
        type: String,
        require: true,
    },
    count: {
        type: Number,
        required: true,
    },
});

module.exports = new mongoose.model("Rooms", Rooms);
