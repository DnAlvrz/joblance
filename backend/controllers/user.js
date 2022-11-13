const asyncHandler = require('express-async-handler');
const Job = require('../models/Job');
const User = require('../models/User');
const Profile = require('../models/UserProfile');



const getUserJobs = asyncHandler(async (req, res) => {
  // const user = await User.findById({_id:req.user.id});
  if(req.user.id){
    const jobs = await Job.find({user:req.user.id}).populate('contracts').populate('offers').populate('applications');
    res.status(200).json(jobs);
  } else {
    res.status(404);
    throw new Error('User not found')
  }
});

const getUserProfile = asyncHandler(async (req, res) => {
  const userId = req.params.userId

  const user = await User.findById({_id:userId}, {
    contracts:0,
    __v:0,
    updatedAt: 0,
    password:0,
    jobs: 0,
    offers: 0,
    conversations: 0,
    role: 0
  }).populate('profile');

  if(user){
    res.status(200).json(user);
  } else {
    res.status(404);
    throw new Error('User not found')
  }
});

const updateAbout = asyncHandler(async (req, res) => {
  const userId = req.params.userId
  const {aboutText} = req.body;
  const user = await User.findById({_id:userId}).populate('profile');

  if(!user) {
    res.status(404)
    throw new Error('User not found.')
  }
  const profile = await Profile.findOne({_id:user.profile});

  if(!profile) {
    res.status(404);
    throw new Error('Profile not found')
  }

  profile.about = aboutText;
  await profile.save();
  console.log(profile)
  if(user){
    res.status(200).json(user);
  } else {
    res.status(404);
    throw new Error('User not found')
  }
});

const addEducation = asyncHandler(async (req, res) => {
  const userId = req.params.userId
  const {type, name, yearAttended, yearGraduated, course} = req.body.educationData
  const user = await User.findById({_id:userId}).populate('profile');

  if(!user) {
    res.status(404)
    throw new Error('User not found.')
  }

  const profile = await Profile.findOne({_id:user.profile});

  if(!profile) {
    res.status(404);
    throw new Error('Profile not found')
  }
  switch (type) {
    case 'college':
      profile.college.push({
        name,
        yearAttended,
        yearGraduated,
        course
      });
      break;
    case 'highschool':
      profile.highschool.push({
          name,
          yearAttended,
          yearGraduated,
      });
      break;
    case 'elementary':
      profile.elementary.push({
          name,
          yearAttended,
          yearGraduated,
        });
      break;
    default:
      res.status(400);
      throw new Error('Select valid type of education')
      break;
  }

  await profile.save();
  if(user){
    res.status(200).json(user);
  } else {
    res.status(404);
    throw new Error('User not found')
  }
});

const addSkills = asyncHandler(async (req, res) => {
  const userId = req.params.userId
  const {skills} = req.body;
  console.log(req.body)
  const user = await User.findById({_id:userId}).populate('profile');

  if(!user) {
    res.status(404)
    throw new Error('User not found.')
  }

  const profile = await Profile.findOne({_id:user.profile});

  if(!profile) {
    res.status(404);
    throw new Error('Profile not found')
  }
  profile.skills = skills;
  await profile.save();
  if(user){
    res.status(200).json(user);
  } else {
    res.status(404);
    throw new Error('User not found')
  }
});


module.exports = {
  getUserJobs,
  getUserProfile,
  updateAbout,
  addEducation,
  addSkills
}