import { createAsyncThunk, createSlice  } from "@reduxjs/toolkit";
import chatService from "./chatService";


const initialState = {
  conversations: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: ''
}

export const getConversations = createAsyncThunk('chat/getConversations', async(userId,thunkAPI)=> {
  try {
    const userToken = thunkAPI.getState().auth.user.token;

    const responseData = await chatService.getUserConversations(userToken, userId);
    return responseData;
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    return thunkAPI.rejectWithValue(message);
  }

});


export const chatSlice = createSlice({
  name:'chat',
  initialState,
  reducer: {
    reset: (state)=> initialState
  },
  extraReducers: (builder)=> {
    builder
      // Get jobs
      .addCase(getConversations.pending, (state)=> {state.isLoading=true})
      .addCase(getConversations.fulfilled, (state, action)=> {
        state.isLoading=false;
        state.isError = false;
        state.conversations = action.payload;
      })
      .addCase(getConversations.rejected, (state, action)=> {
        state.isLoading=false;
        state.isError = true;
        state.message = action.payload;
      })
  }
})


export const {reset} = chatSlice.actions
export default chatSlice.reducer