const router = require('express').Router();

const {
  getConversation,
  createConversation
} = require('../controllers/conversation')

// Get conversation of a user
router.get('/', getConversation);

// Create conversation
router.post('/', createConversation);
// router.put('/:id', )
// router.delete('/:id', );

module.exports = router;