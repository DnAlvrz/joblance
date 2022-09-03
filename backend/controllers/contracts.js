const asyncHandler = require('express-async-handler');
const Contract = require('../models/Contract');
const User = require('../models/User');

const addContract = asyncHandler(async (req, res) => {
  const jobId = req.params.jobId;
  const job = await Job.findById( { _id: jobId } );

  if(!job){
    res.status(404);
    throw new Error('Job not found');
  }
  
  if(req.user._id.toString() !== job.user.id) {
    res.status(403);
    throw new Error('User is not authorized');
  }

  const talentId=req.body.talentId;
  const talent = await User.findById( { _id: talentId});
  if(!talent){
    res.status(404);
    throw new Error('User not found');
  }

  const contract = await Contract.create({ 
    job: job._id,
    talent: talent._id,
   });
   if(!contract) {
    res.status(400);
    throw new Error('Contract not created');
   }
   res.statusCode(201).json(contract);

})


module.exports = {
  addContract,
}