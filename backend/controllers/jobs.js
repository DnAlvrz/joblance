const asyncHandler = require('express-async-handler');
const path = require('path')
const Job = require('../models/Jobs');
const JobPhoto = require('../models/JobPhoto');

const getJob = asyncHandler(async (req, res) => {
  const jobs = await Job.find({},{createdAt:0, updatedAt:0, __v:0});
  res.status(200).json(jobs);
});


const viewJob = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const job = await Job.findOne({id}, {createdAt:0, updatedAt:0, __v:0});
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

const uploadJobPhotos = asyncHandler( async(req, res) => {
  const id = req.params.id;
  const job = await Job.findById( { _id: id } );
  if(!job) {
    throw new Error('Job not found')
  }
  const files = req.files
  Object.keys(files).forEach(async (key) => {
    const filepath = path.join(__dirname, '../../','files', files[key].name);
    const photo = await JobPhoto.create({
      name: files[key].name,
      path: filepath,
    });
    if(photo){ 
      job.photos.push(photo._id)
      await job.save();
    };
    files[key].mv(filepath, err => { 
      if(err){ 
        throw new Error('Something went wrong. Try again')
      }
    });
  });
  res.status(201).json({message: 'Succesfully uploaded photos.'})
});

const updateJob = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const jobMatch = await Job.findOne({id});

  if(!jobMatch) {
    res.status(400);
    throw new Error('Job not found');
  }
  if (jobMatch.user._id.toString() !== req.user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }

  const updatedJob = await Job.findByIdAndUpdate(id, req.body, {
    new: true,
  });

  res.status(204).json(updatedJob);
});

const deleteJob = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const jobMatch = await Job.findOne({id});

  if(!jobMatch) {
    res.status(400);
    throw new Error('Job not found');
  }
  if (jobMatch.user._id.toString() !== req.user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }

  await jobMatch.remove()
  res.status(204).json({id:req.params.id});
});


module.exports = {
  getJob,
  createJob,
  uploadJobPhotos,
  updateJob,
  deleteJob,
  viewJob
}