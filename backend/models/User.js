const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: [true, 'Please enter a valid email address.']
  },
  firstname : {
    type: String,
    required: [true, 'Please enter a firstname.']
  },
  lastname : {
    type: String,
    required: [true, 'Please enter a lastname.']
  },
  phone: {
    type: String,
    required: [true, 'Please enter a phone number']
  },
  password: {
    type: String,
    required: [true, 'Please enter a password.']
  },
  profession: [{
    type: String,
  }],
  role: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Role'
  },
  jobs: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Job'
  }],
  contracts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Contract'
  }]
}, {
  timestamps: true
});

module.exports = new mongoose.model('User', userSchema)