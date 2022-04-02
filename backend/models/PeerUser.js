const mongoose = require("mongoose");
const PeerUser = mongoose.Schema({
  peerId: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  audio: {
    type: Boolean,
    required: true,
  },
  video: {
    type: Boolean,
    required: true,
  },
});

module.exports = new mongoose.model("PeerUser", PeerUser);
