import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import jobReducer from '../features/jobs/jobSlice'
import chatReducer from '../features/chat/chatSlice'
import contractReducer from '../features/contracts/contractSlice'
import ratingReducer from '../features/rating/ratingSlice'


export const store = configureStore({
  reducer: {
    auth:authReducer,
    jobs:jobReducer,
    chat: chatReducer,
    contract: contractReducer,
    rating: ratingReducer
  },
});