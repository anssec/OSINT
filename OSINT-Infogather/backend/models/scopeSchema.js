const mongoose = require("mongoose");

const scope = new mongoose.Schema({
  api: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("apiscopes", scope);
