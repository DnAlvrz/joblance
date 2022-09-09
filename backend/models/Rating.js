const mongoose = require('mongoose');

const ratingSchema = new mongoose.Schema({
<<<<<<< HEAD
  contract: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Contract',
  },
=======
>>>>>>> 21e3407def93f6b044e7b693ec9a5208961c3421
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  talent: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  rating: {
    type: Number,
    min: [1, 'Must be at least 1, got {VALUE}'],
    max: [5, 'Only a max rating of 5 is allowed'],
  },
  text : {
    type: String,
  }
});

module.exports = new mongoose.model('Rating', ratingSchema);