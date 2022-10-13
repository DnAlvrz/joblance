const asyncHandler = require('express-async-handler');
const Application = require('../models/Application');
const Contract = require('../models/Contract');

const deleteApplication = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const applicationMatch = await Application.findOne({_id: id}).populate('job');

  if(!applicationMatch) {
    res.status(400);
    throw new Error('Application not found');
  }

  if (applicationMatch.job.user._id.toString() !== req.user._id) {
    res.status(401);
    throw new Error('User not authorized');
  }

  await applicationMatch.remove();
  res.status(204).json({id:req.params.id});
});



const createApplication = asyncHandler(async(req,res)=> {
  const {  jobId, message } = req.body;

  if(!jobId || !message) {
    res.status(400);
    throw new Error('Please fill in all fields');
  }
  const job = await Job.findOne({_id:jobId});
  if(job) {

    const application = await Application.create({
      job:jobId,
      talent: req.user._id,
      message
    });

    if(application) {
      res.status(201).json(application);
    } else {
      res.status(400)
      throw new Error('Something went wrong while trying to create job application.')
    }
  } else {
    res.status(400);
    throw new Error('Job not found.');
  }
});

module.exports = {
  createApplication,
  updateApplication,
  deleteApplication,
  getApplications
}