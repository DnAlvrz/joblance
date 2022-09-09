const asyncHandler = require('express-async-handler');

const getClientJobs = asyncHandler(async (req, res) => {
  
});
const getAllConvesations = asyncHandler(async (req, res) => {});
const getOpenJobs = asyncHandler(async (req, res) => {});


module.exports = {
  getOpenJobs,
  getAllConvesations,
  getClientJobs,
}