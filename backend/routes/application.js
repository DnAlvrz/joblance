const router = require('express').Router();

const {
  createApplication,
  updateApplication,
  deleteApplication
} = require('../controllers/application')

router.get('/:jobId', getApplications);

router.post('/', createApplication);
router.put('/:id', updateApplication)
router.delete('/:id', deleteApplication);

module.exports = router;