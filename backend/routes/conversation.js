const router = require('express').Router();

const {
  getConversations,
  createConversation
} = require('../controllers/conversation')

// Get conversation of a user
router.get('/:userId', getConversations);

// Create conversation
router.post('/', createConversation);
// router.put('/:id', )
// router.delete('/:id', );

module.exports = router;