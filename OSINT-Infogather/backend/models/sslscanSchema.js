const mongoose = require("mongoose");

const sslscanSchema = new mongoose.Schema({
  sslscan: {
    type: String,
    required: true,
  },
  scope: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "apiscopes",
  },
});
module.exports = mongoose.model("sslscans", sslscanSchema);
