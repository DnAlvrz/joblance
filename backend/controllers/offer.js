const asyncHandler = require('express-async-handler');
const Offer = require('../models/Offer');

const listOffer = asyncHandler(async (req, res) => {
  const offers = await Offers.find();
  res.status(200).json(offers);
});

const getOffer = asyncHandler(async (req, res) => {
  const offerId = req.params.offerId;
  const offer = await Offer.findById({_id: offerId});
  if(!offer){
    res.status(404)
    throw new Error('Offer not found');
  }
  res.status(200).json(offer);
});

const addOffer = asyncHandler(async (req, res) => {
  const jobId = req.params.jobId;
  const {text, talentId} = req.body;
  const job = await Job.findById( { _id: jobId } );
  const talent = await User.findById({_id:talentId})
  if(!text || !talentId) {
    res.status(400);
    throw new Error('Text and Talent are required');
  }
  if(!job){
    res.status(404)
    throw new Error('Job not found');
  }
  if(!talent){ 
    res.status(404)
    throw new Error('User not found');
  }

  const offer = new Offer({
    job:job._id,
    text,
    user: talent._id
  });

  if(!offer){
    res.status(400);
    throw new Error('Offer not created');
  }

  res.status(201).json(offer);

});

const updateOffer = asyncHandler(async (req, res) => {
  const offerId = req.params.offerId;
  const {text} = req.body;
  if(!text) {
    res.status(400);
    throw new Error('Offer is required');
  }
  const offer = await Offer.findById( { _id: offerId });

  if(!offer){
    res.status(404);
    throw new Error('Offer not found');
  }
  offer.text = text;
  await offer.save();
  res.status(201).json(offer)
});

const deleteOffer = asyncHandler(async (req, res) => {
  const offerId = req.params.offerId;
  const offer = await Offer.findById( { _id: offerId });
  if(!offer){
    res.status(404);
    throw new Error('Offer not found');
  }
  await offer.remove();
  res.status(204).json({id:offer._id});
});

module.exports = {
  listOffer,
  getOffer,
  addOffer,
  updateOffer,
  deleteOffer
};