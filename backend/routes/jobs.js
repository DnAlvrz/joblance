const router = require('express').Router();

const {
  listJobs,
  createJob,
  updateJob,
  deleteJob,
  viewJob
} = require('../controllers/jobs')

router.route('/').get(listJobs).post(createJob);
router.route('/:id').put(updateJob).delete(deleteJob);
router.route('/view/:id').get(viewJob)


module.exports = router;