
const path = require('path')
const asyncHandler = require('express-async-handler');
const JobPhoto = require('../models/JobPhoto');
const Job = require('../models/Job');
const fs = require('fs');

const uploadJobPhotos = asyncHandler( async(req, res) => {
  console.log(req.params.jobId)
  const id = req.params.jobId;
  const job = await Job.findOne( { id } );
  
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
    res.status(201).json({photos:job.photos})
  }
});

const deletePhoto =  asyncHandler(async (req, res) => {
  const photoId = req.params.photoId;
  const jobId = req.params.jobId;
  const photo = await JobPhoto.findById( { _id: photoId } );
  const job = await Job.findById( { _id: jobId } );
  const photoIndex = job.photos.indexOf(photoId);

  if(!photo){
    res.status(404)
    throw new Error('Photo not found');
  }
  
  if(!job){
    res.status(404)
    throw new Error('Job not found');
  }

  if(job.user._id.toString() !== req.user.id) {
    throw new Error('Unauthorized');
  }
  if(photoIndex > -1){
    fs.unlink(photo.path, async (err) => {
      if (err) {
        res.status(400)
        throw new Error('Something went wrong. Cannot delete photo.');
      }
      await photo.remove();
      job.photos.splice(photoIndex, 1);
      await job.save();
      res.status(204).json({id:photoId})
    });
  } else {
    res.status(400)
    throw new Error('Something went wrong. Cannot delete photo.');
  }
});

const listPhotos = asyncHandler(async (req, res) => {
  const jobId = req.params.jobId;
  const job = await Job.findById( { _id: jobId } ).populate('photos');
})

module.exports = {
  uploadJobPhotos,
  deletePhoto,
  listPhotos
}