const router = require('express').Router();

const {
<<<<<<< HEAD
  listJobs,
=======
  getJobs,
>>>>>>> 21e3407def93f6b044e7b693ec9a5208961c3421
  createJob,
  updateJob,
  deleteJob,
  viewJob
} = require('../controllers/jobs')

<<<<<<< HEAD
router.route('/').get(listJobs).post(createJob);
=======

router.route('/').get(getJobs).post(createJob);
>>>>>>> 21e3407def93f6b044e7b693ec9a5208961c3421
router.route('/:id').put(updateJob).delete(deleteJob);
router.route('/view/:id').get(viewJob)


module.exports = router;