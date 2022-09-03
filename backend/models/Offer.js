const mongoose = require('mongoose');

const offerSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  text: {
    type: String,
    required: [true, 'Please enter your offer for the project']
  },
}, {
  timestamps: true
});

module.exports = new mongoose.model('Offer', offerSchema);
