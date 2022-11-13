const router = require('express').Router();
const {getUserJobs, getUserProfile, updateAbout, addEducation, addSkills} = require('../controllers/user');

router.route('/jobs').get(getUserJobs);
router.route('/:userId').get(getUserProfile);
router.route('/:userId/about').put(updateAbout);
router.route('/:userId/education').put(addEducation);
router.route('/:userId/skills').put(addSkills);

module.exports = router;