const mongoose = require('mongoose');

const jobPhotoSchema = new mongoose.Schema({
  name: {
    type:String,
    required: [true, 'Upload a photo with a filename']
  },
  path: {
    type:String,
    required: [true, 'Enter the filepath']
  }
}, {timestamps:true});

module.exports = new  mongoose.model('JobPhoto', jobPhotoSchema)