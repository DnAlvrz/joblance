
const path = require('path')
const asyncHandler = require('express-async-handler');
const JobPhoto = require('../models/JobPhoto');
const Job = require('../models/Job');
const fs = require('fs');

const uploadJobPhotos = asyncHandler( async(req, res) => {
  const id = req.params.jobId;
  const job = await Job.findById( { _id: id } );

  if(!job) {
    res.status(404)
    throw new Error('Job not found')
  }

  if(job.user._id.toString() !== req.user.id) {
    res.status(401);
    throw new Error('Unauthorized')
  }
  const files = req.files
  const errFiles = [];

  Object.keys(files).forEach(async (key) => {
    const filepath = path.join(__dirname, '../../','files', files[key].name);
    files[key].mv(filepath, async (err) => { 
      if(err){
        errFiles.push(files[key].name);
        return;
      }
      const photo = await JobPhoto.create({
        name: files[key].name,
        path: filepath,
      });
      job.photos.push(photo._id)
      await job.save();
    });
  });
  if(errFiles.length > 0){
    res.status(500);
    throw new Error(`Something went wrong while uploading ${errFiles}.`.replaceAll(',', ', '))
  } else {
    res.status(201).json({message: 'Succesfully uploaded photos.'})
  }
});


const deletePhoto =  asyncHandler(async (req, res) => {
  const photoId = req.params.photoId;
  const photo = await JobPhoto.findById( { _id: photoId } );
  fs.unlink(photo.filepath, async (err) => {
    if (err) {
      res.status(400)
      throw new Error('Something went wrong. Cannot delete photo.');
    }
    await photo.remove();
    res.status(204).json({id})
  });
});

const listPhotos = asyncHandler(async (req, res) => {
  const jobId = req.params.jobId;
  const job = await Job.findById( { _id: jobId } );
})


module.exports = {
  uploadJobPhotos,
  deletePhoto,
  listPhotos
}