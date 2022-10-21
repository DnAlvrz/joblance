import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import jobReducer from '../features/jobs/jobSlice'
import chatReducer from '../features/chat/chatSlice'
export const store = configureStore({
  reducer: {
    auth:authReducer,
    jobs:jobReducer,
    chat: chatReducer
  },
});