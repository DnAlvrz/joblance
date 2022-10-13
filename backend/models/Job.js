const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  isOpen: {
    type: Boolean,
    default: true
  },
  isVerified: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    required: [true, 'Please enter the title of the project']
  },
  description: {
    type: String,
    required: [true, 'Please enter the description of the project']
  },
  location: {
    type: String,
    required: [true, 'Please enter the location of the project']
  },
  lat: {
    type: Number,
    required: [true, 'Please enter the latitude of the project']
  },
  long: {
    type: Number,
    required: [true, 'Please enter the longitude of the project']
  },
  budget : {
    type: Number,
    required: [true, 'Please enter the budget of the project']
  },
  duration: {
    type: String,
    required: [true, 'Please enter the duration of the project']
  },
  contracts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Contract'
  }],
  photos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'JobPhoto'
    }
  ],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  offers: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Offer'
  }],
  applications: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Application'
  }],
},
{
  timestamps: true
});

module.exports = new mongoose.model('Job', jobSchema);