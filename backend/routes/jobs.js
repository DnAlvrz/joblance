const router = require('express').Router();

const {
  getJob,
  createJob,
  uploadJobPhotos,
  updateJob,
  deleteJob,
  viewJob
} = require('../controllers/jobs')


router.route('/').get(getJob).post(createJob);
router.route('/:id').put(updateJob).delete(deleteJob);
router.route('/view/:id').get(viewJob)


module.exports = router;