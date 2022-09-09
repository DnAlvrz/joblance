const asyncHandler = require('express-async-handler');
const Job = require('../models/Job');

const listJobs = asyncHandler(async (req, res) => {
  console.log('list jobs')
  const jobs = await Job.find({isOpen:true},{ contracts:0, updatedAt:0, __v:0, offers:0, isOpen:0});
  res.status(200).json(jobs);
});


const viewJob = asyncHandler(async (req, res) => {
  console.log('view jobs')
  const id = req.params.id;
  const job = await Job.findOne({id}, { contracts:0, updatedAt:0, __v:0, offers:0, isOpen:0});
  res.status(200).json(job);
});

const createJob = asyncHandler( async(req, res) => {
  const {
    title, 
    description,
    location, 
    lat, 
    long,
    budget,
    duration
  } = req.body;
  if( 
      !title || 
      !description || 
      !location || 
      !lat || 
      !long || 
      !budget || 
      !duration
    ) {
    res.status(400);
    throw new Error('Please fill in all fields');
  }

  const job = await Job.create( {
    title,
    description,
    location,
    lat,
    long,
    budget,
    duration,
    user: req.user._id
  });

  if(job) {
    res.status(201).json({
      id: job._id,
      title: job.title,
      description: job.description,
      location: job.location,
      lat: job.lat,
      long: job.long,
      budget: job.budget,
      duration: job.duration
    });
  } else {
    res.status(400);
    throw new Error('Job not created');
  }

});

const updateJob = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const job = await Job.findOne({id});

  if(!job) {
    res.status(400);
    throw new Error('Job not found');
  }
  if (job.user._id.toString() !== req.user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }

  const updatedJob = await Job.findByIdAndUpdate(id, req.body, {
    new: true,
  });

  res.status(201).json(job);
});

const deleteJob = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const jobMatch = await Job.findOne({id});

  if(!jobMatch) {
    res.status(400);
    throw new Error('Job not found');
  }

  if (jobMatch.user._id.toString() !== req.user.id) {
    res.status(401);
    throw new Error('User not authorized');
  }

  await jobMatch.remove();
  res.status(204).json({id:req.params.id});
});


module.exports = {
  listJobs,
  createJob,
  updateJob,
  deleteJob,
  viewJob
};