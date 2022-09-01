const router = require('express').Router();
const fileUpload = require('express-fileupload');
const {
  getJob,
  createJob,
  uploadJobPhotos,
  updateJob,
  deleteJob,
  viewJob
} = require('../controllers/jobs')
const {
  filespayload,
  fileExtLimiter,
  fileSizeLimiter,
} = require('../middleware/files')

router.route('/').get(getJob).post(createJob);
router.route('/:id').put(updateJob).delete(deleteJob);
router.route('/view/:id').get(viewJob)
router.post('/:id/add-photos',
fileUpload({createParentPath:true}),
  filespayload,
  fileSizeLimiter, 
  fileExtLimiter(['.jpg', '.png', '.jpeg']), 
  uploadJobPhotos
)

module.exports = router;