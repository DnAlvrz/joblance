const asyncHandler = require('express-async-handler');
const Job = require('../models/Job');
const User = require('../models/User');


const getClientJobs = asyncHandler(async (req, res) => {

});
const getAllConvesations = asyncHandler(async (req, res) => {});
const getOpenJobs = asyncHandler(async (req, res) => {});

const getUserJobs = asyncHandler(async (req, res) => {
  console.log(req.user)
  // const user = await User.findById({_id:req.user.id});
  if(req.user.id){
    const jobs = await Job.find({user:req.user.id});
    res.status(200).json(jobs);
  } else {
    res.status(404);
    throw new Error('User not found')
  }
});


module.exports = {
  getOpenJobs,
  getAllConvesations,
  getClientJobs,
  getUserJobs
}