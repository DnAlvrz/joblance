const asyncHandler = require('express-async-handler');
const Job = require('../models/Job');

const listJobs = asyncHandler(async (req, res) => {
  const  page  = parseInt(req.query.page) || 1;
  const  limit  = parseInt(req.query.limit) || 50;
  const lat = req.query.lat;
  const lng = req.query.lng;
  const offset = page > 1 ? (page -1) * limit : 0;
  const jobs = await Job.find({
     isOpen:true,
     isVerfied: true,
     worktype: {$in: req.user.profile.skills},
     geolocation:{$near:{$geometry: {type:'point', coordinates:[lat, lng]}}}},
     {
       contracts: 0,
       offers: 0,
       updatedAt: 0,
       isOpen: 0,
       __v: 0,
     })
     .populate('geolocation')
     .sort({
       createdAt:1,
     })
     .skip(offset)
     .limit(limit);
  const jobsCount = await Job.count({
    isOpen:true,
    isVerifieed:true,
    worktype: {$in: req.user.profile.skills},
    geolocation:{$near:{$geometry: {type:'point', coordinates:[lat, lng]}}}
  });
  res.status(200).json({jobs, jobsCount});
});


const viewJob = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const job = await Job.findOne({_id:id})
    .populate({
      path:'contracts',
      populate:[
        {
          path: 'talent',
          select:' firstname lastname',
        }, {
          path:'rating',
          model:'Rating'}
        ]
    })
    .populate('geolocation')
    .populate({
        path:'applications',
        populate:{
          path: 'talent',
          select:' firstname lastname',
      }})
    .populate({
      path: 'offers',
      populate: {
        path:'talent',
        select: 'firstname lastname'
      }
    });
  if(job){
    res.status(200).json(job);
  } else {
    res.status(404);
    throw new Error('Job not found')
  }

});

const createJob = asyncHandler( async(req, res) => {
  const {
    title,
    description,
    location,
    lat,
    lng,
    budget,
    duration,
    worktype,
    city
  } = req.body;

  if(
      !title ||
      !description ||
      !location ||
      !lat ||
      !lng ||
      !budget ||
      !duration||
      !worktype ||
      !city
    ) {
    res.status(400);
    throw new Error('Please fill in all fields');
  }

  const job = await Job.create( {
    title,
    description,
    address:location,
    lat,
    geolocation: {type:'Point', coordinates:[lng, lat]},
    budget,
    duration,
    worktype,
    city,
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
      worktype,
      city,
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

  if (job.user._id.toString() !== req.user._id.toString()) {
    res.status(401)
    throw new Error('User not authorized')
  }

  const updatedJob = await Job.findByIdAndUpdate(id, req.body);

  if(updatedJob){
    res.status(201).json(job);
  } else{
    res.status(500)
    throw new Error('Something went wrong.')
  }

});

const deleteJob = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const jobMatch = await Job.findOne({id});
  if(!jobMatch) {
    res.status(400);
    throw new Error('Job not found');
  }

  if (jobMatch.user._id.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error('User not authorized');
  }

  await jobMatch.remove();
  res.status(204).json({id:req.params.id});
});

const getUserJobs = asyncHandler(async (req, res) => {
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
  listJobs,
  createJob,
  updateJob,
  deleteJob,
  viewJob,
  getUserJobs
};