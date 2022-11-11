const mongoose = require('mongoose');

const userProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref:'User'
  },
  isActivated: {
    type:Boolean,
    default:false
  },
  about: {
    type:String
  },
  workExperience: [{
    position:String,
    startYear: {
      type:String,
      required:true
    },
    endYear: {
      type:String
    }
  }],
  skills:[String],
  education: [{
    school:{
      type:String,
      required: true,
    },
    yearAttended: {
      type:String,
      required:true
    },
    yearGraduated: {
      type:String
    }
  }],
  testimonials: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Rating'
  }
}, {timestamps:true});

module.exports = new mongoose.model('UserProfile', userProfileSchema);