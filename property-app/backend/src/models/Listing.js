const mongoose = require('mongoose');

const listingSchema = new mongoose.Schema({
  image: String,
  location: String,
  price: Number,
  description: String,
  // ...other fields
});

module.exports = mongoose.model('Listing', listingSchema);