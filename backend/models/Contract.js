const mongoose = require('mongoose');

const contractSchema = new mongoose.Schema({
  job: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Job',
  },
  talent: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }
}, {timestamps: true});

module.exports = new mongoose.model('Contract', contractSchema);