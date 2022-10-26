const router = require('express').Router();

const {
  createApplication,
  updateApplication,
  deleteApplication
} = require('../controllers/application')

router.post('/', createApplication);
router.delete('/:id', deleteApplication);

module.exports = router;