const router = require('express').Router();
const {
  listContracts,
  addContract,
  deleteContract,
  terminateContract,
  toggleContract
} = require('../controllers/contracts');

router.route('/').get(listContracts).post(addContract);
router.route('/:contractId').put(toggleContract).delete(deleteContract)
router.route('/terminate/:contractId').put(terminateContract)

module.exports = router;