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
}, {timestamps:true});

module.exports = new  mongoose.model('UserPhoto', userPhoto)