const Mongoose = require('mongoose');
const addressSchema = {
    houseNo: { type: String, required: true },
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    postalCode: { type: String, required: true },
    direction: { type: String },
    landmark: { type: String },
    saveAs: { type: String },
    longitude: { type: Number },
    latitude: { type: Number },
  };
  
  const userDetailsSchema = new Mongoose.Schema({
    userId: { type: String },
    name: { type: String, required: true },
    address: addressSchema,
    status: { type: Boolean, default: true },
    createdat: { type: Date, default: Date.now },
    updatedat: { type: Date, default: Date.now },
  });
  module.exports = Mongoose.model('userDetails', userDetailsSchema);