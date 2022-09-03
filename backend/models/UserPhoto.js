const mongoose = require('mongoose');

const userPhoto = new mongoose.Schema({
  name: {
    type:String,
    required: [true, 'Upload a photo with a filename']
  },
  path: {
    type:String,
    required: [true, 'Please attach a picture or photo of yourself']
  },
  description: {
    type:String,
    required: [false, 'Enter a description'],
    default:  null
  }
}, {timestamps:true});

module.exports = new  mongoose.model('UserPhoto', userPhoto)