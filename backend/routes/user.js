const router = require('express').Router();
const {getUserJobs, getUserProfile} = require('../controllers/user');

router.route('/jobs').get(getUserJobs);
router.route('/:userId').get(getUserProfile);
module.exports = router;