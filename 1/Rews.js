const mongoose = require("mongoose");

const RewSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  date:{
    type:String,
    required:true
  }
});

module.exports = mongoose.model("Rews",RewSchema);
