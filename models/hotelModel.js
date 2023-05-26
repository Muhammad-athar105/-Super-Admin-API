const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
  name: {
     type: String, 
     required: true 
    },
  location: { 
    type: String, 
    required: true 
  },
  hotel_type: { 
    type: String, 
    required: true 
  },
  enabled: { 
    type: Boolean, 
    default: false 
  },
  approved: { 
    type: Boolean, 
    default: false 
  }
});

const Hotel = mongoose.model('Hotel', hotelSchema);

module.exports = Hotel;
