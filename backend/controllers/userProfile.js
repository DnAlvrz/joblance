const asyncHandler = require("express-async-handler");
const Profile = require('../models/UserProfile');
const User= require('../models/User');

const newUserProfile = asyncHandler(async (req,res) => {
  if(req.user.role.name !== 'worker') {
    res.status(401);
    throw new Error('Only registered workers can make a profile.')
  }

});

const getProfilesByCategory = asyncHandler(async (req, res) => {

});

const updateUserProfile = asyncHandler(async (req, res) => {

});

const deActivateProfile = asyncHandler(async (req, res) => {

});

module.exports = {
  newUserProfile,
  getProfilesByCategory,
  updateUserProfile,
  deActivateProfile
}