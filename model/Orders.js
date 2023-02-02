const mongoose = require("mongoose");
const OrderSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  ccnum: {
    type: String,
    required: true,
  },
  expyear: {
    type: String,
    required: true,
  },
  cvv: {type: String,required: true},
  orders: [],
  date: {type: String,required: true
  },
  realdate: { type: String, required: true },
  totalsum: { type: String, required: true },
  ordernumber: { type: String, required: true },
  status: { type: String, required: true }
});

module.exports = mongoose.model("Orders", OrderSchema);
