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
});

const deleteContract = asyncHandler(async (req, res) => {
  const contractId = req.params.contractId;
  const contract = await Contract.findById( { _id: contractId });
  if(!contract) {
    res.status(404);
    throw new Error('Contract not found');
  }
  await contractId.remove();
  res.statusCode(204).json({id:contractId});
});

const toggleContract = asyncHandler(async (req, res) => {
  const contractId = req.params.contractId;
  const contract = await Contract.findById( { _id: contractId });
  if(!contract) {
    res.status(404);
    throw new Error('Contract not found');
  }
  contract.isOpen = !contract.isOpen;
  await contract.save();
  res.statusCode(200).json(contract);
});

module.exports = {
  addContract,
}