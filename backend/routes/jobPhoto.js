
const router = require('express').Router();
const fileUpload = require('express-fileupload');
const {
  uploadJobPhotos, 
  listPhotos,
  deletePhoto
} = require('../controllers/jobPhoto');

const {
  filespayload,
  fileExtLimiter,
  fileSizeLimiter,
} = require('../middleware/files');

router.get('/', listPhotos);

router.post('/:jobId',
  fileUpload({createParentPath:true}),
  filespayload,
  fileSizeLimiter,
  fileExtLimiter(['.jpg', '.png', '.jpeg']),
  uploadJobPhotos
);

router.delete('/:jobId/remove/:photoId', deletePhoto);

module.exports = router;                