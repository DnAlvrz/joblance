const asyncHandler = require('express-async-handler');
const Rating = require('../models/Rating');
const Job = require('../models/Job');
const User = require('../models/User');

const getUserRating = asyncHandler(async (req, res) => {
  const ratingAvg = Rating.aggregate([
    { $match: { user: req.params.userId } },
    { $group: {avg_rating: {$avg:"rating.rating"}}},
    { $project: {
          "id": req.params.userId,
          "avg_rating": "$avg_rating"
      }
    }
  ]);
});

const addRating = asyncHandler(async (req, res) => {
  const jobId = req.params.jobId;
  const {talentId, ratingNum, text} = req.body;

  if(!talentId || !rating || !text) {
    res.status(400);
    throw new Error('Please fill in all fields');
  }

  const job = await Job.findById( { _id: jobId } );
  const talent = await User.findById( { _id: talentId });

  if(job.user._id.toString() !== req.user.id) {
    res.status(403);
    throw new Error('Unauthorized');
  }

  if(!job || !talent) {
    const msge = job && !talent ? 'User not found.' : 'Job not found.'
    res.status(404);
    throw new Error(msge);
  }

  const rating = await Rating.create({
    user: req.user._id,
    talent: talent._id,
    rating: ratingNum,
    text
  });

  if(rating){
    res.status(201).json(rating);
  } else {
    res.status(400)
    throw new Error('Could not create new rating');
  }
});

const getRating = asyncHandler(async (req, res) => {
  const id = req.params.ratingId;
  const rating = await Rating.findById( { _id: id });

  if(!rating) {
    res.status(404)
    throw new Error('Rating not found');
  }

  res.status(200).json(rating);
});

const updateRating = asyncHandler(async (req, res) => {
  const id = req.params.ratingId;
  const rating = await Rating.findOne( { _id: ratingId });

  if(!rating) {
    res.status(404)
    throw new Error('Rating not found');
  }

  if(rating.user._id.toString() !== req.user.id) {
    res.status(403)
    throw new Error('User is not authorized');
  }

  const updatedRating = await Rating.findByIdAndUpdate(id,req.body, {new: true})
  res.status(201).json(updatedRating);
});


const deleteRating = asyncHandler(async (req, res) => {
  const id = req.params.ratingId;
  const rating = await Rating.findOne({id});

  if(!rating) {
    res.status(400);
    throw new Error('Rating not found');
  }
  if (rating.user._id.toString() !== req.user.id) {
    res.status(401);
    throw new Error('User not authorized');
  }

  await rating.remove();
  res.status(204).json({id:req.params.ratingId});
});

module.exports = {
  getUserRating,
  addRating,
  getRating,
  updateRating,
  deleteRating
} 