const asyncHandler = require('express-async-handler');
const Conversation = require('../models/Conversation');


const getConversation = asyncHandler(async (req,res)=>  {

});

const createConversation = asyncHandler(async (req,res)=>  {
  const newConversation = await Conversation.create({
    members: [req.body.senderId, req.body.receiverId]
  })
  if(newConversation) {
    res.status(201).json(newConversation);
  } else {
    res.status(400);
    throw new Error('Something went wrong.')
  }
});

const deleteConversation = asyncHandler(async (req,res)=>  {

});

module.exports = {
  getConversation,
  createConversation,
  deleteConversation
}