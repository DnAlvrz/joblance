const router = require('express').Router();
const {getUserJobs} = require('../controllers/user');

router.route('/jobs').get(getUserJobs);

module.exports = router;