const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
  message: {
    type:String,
    required: [true, 'Enter message for the client']
  },
  job: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Job',
  },
  talent: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
}, {timestamps: true});

module.exports = new mongoose.model('Application', applicationSchema);