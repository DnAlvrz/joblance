const router = require('express').Router();

const {
  createApplication,
  updateApplication,
  deleteApplication,
  rejectApplication
} = require('../controllers/application')

router.post('/', createApplication);
router.put('/terminate/:id', rejectApplication);
router.delete('/:id', deleteApplication);

module.exports = router;