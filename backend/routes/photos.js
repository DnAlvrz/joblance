
const router = require('express').Router();
const fileUpload = require('express-fileupload');
const {
  uploadJobPhotos,
  listPhotos,
  deletePhoto,
  listUserPhotos
} = require('../controllers/jobPhoto');

const {
  filespayload,
  fileExtLimiter,
  fileSizeLimiter,
} = require('../middleware/files');

router.get('/jobs/:jobId', listPhotos);
router.get('/users/:userId', listUserPhotos);
router.post('/:jobId',
  fileUpload({createParentPath:true}),
  filespayload,
  fileSizeLimiter,
  fileExtLimiter(['.jpg', '.png', '.jpeg']),
  uploadJobPhotos
);

router.delete('/:jobId/remove/:photoId', deletePhoto);

module.exports = router;