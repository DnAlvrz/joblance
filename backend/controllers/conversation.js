const asyncHandler = require('express-async-handler');
const { restart } = require('nodemon');
const Conversation = require('../models/Conversation');


const getConversations = asyncHandler(async (req,res)=>  {
  const userId = req.params.userId;
  const conversations = await Conversation.find({
    members:{$in:[userId]}
  })
  if(conversations) {
    res.status(200).json(conversations);
  } else {
    res.status(400)
    throw new Error('Something went wrong.')
  }
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
  const conversationId = req.params.conversationId;
  const conversation = await Conversation.findById( { _id: conversationId });
  if(conversation) {
    await conversation.remove();
    res.status(200).json(testimonial);
  } else {
    res.status(404);
    throw new Error('Conversation not found');
  }
});

module.exports = {
  getConversations,
  createConversation,
  deleteConversation
}