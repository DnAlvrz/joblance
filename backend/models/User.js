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
  profile: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'UserProfile',
    default:null
  },
  role: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Role',
    required: [true, 'User must have a role.']
  },
  jobs: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Job'
  }],
  contracts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Contract'
  }],
  ratings: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Rating'
  }]
}, {
  timestamps: true
});

module.exports = new mongoose.model('User', userSchema)