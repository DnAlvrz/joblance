const mongoose = require('mongoose');

const bidSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  text: {
    type: String,
    required: [true, 'Please enter your bid for the project']
  },
  job: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Job'
  }

}, {
  timestamps: true
});


module.exports = new mongoose.model('Bid', bidSchema);