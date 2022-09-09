const asyncHandler = require('express-async-handler');
const Contract = require('../models/Contract');
const User = require('../models/User');
const Job = require('../models/Job');

// only admin middleware
const listContracts = asyncHandler(async (req, res) => {
  const contracts = await Contract.find();
  res.status(200).json(contracts)
});


const addContract = asyncHandler(async (req, res) => {
  const {talentId, jobId} = req.body;
  if(!jobId || !talentId) {
    res.status(400)
    throw new Error('Please fill in all fields')
  }
  const job = await Job.findById( { _id: jobId } );

  if(!job){
    res.status(404);
    throw new Error('Job not found');
  }
  console.log(req.user.id)
  console.log(job.user._id)
  if(req.user.id !== job.user._id.toString()) {
    res.status(403);
    throw new Error('User is not authorized');
  }

  
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

   res.status(201).json(contract);
});

const deleteContract = asyncHandler(async (req, res) => {
  const contractId = req.params.contractId;
  const contract = await Contract.findById( { _id: contractId });
  if(!contract) {
    res.status(404);
    throw new Error('Contract not found');
  }
  await contract.remove();
  res.status(200).json({id:contractId});
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
  res.status(200).json(contract);
});

module.exports = {
  addContract,
  listContracts,
  toggleContract,
  deleteContract
}