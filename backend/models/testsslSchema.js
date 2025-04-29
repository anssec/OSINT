const mongoose = require("mongoose");

const testsslSchema = new mongoose.Schema({
  testssl: {
    type: String,
    required: true,
  },
  scope: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "apiscopes",
  },
});
module.exports = mongoose.model("testsslscans", testsslSchema);
