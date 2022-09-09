const router = require('express').Router();
const {listContracts, addContract, deleteContract, toggleContract} = require('../controllers/contracts');

router.route('/').get(listContracts).post(addContract);
router.route('/:contractId').put(toggleContract).delete(deleteContract)


module.exports = router;