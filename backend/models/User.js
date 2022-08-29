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
  password: {
    type: String,
    required: [true, 'Please enter a password.']
  },
  role: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Role'
  }

}, {
  timestamps: true
});

module.exports = new mongoose.model('User', userSchema)