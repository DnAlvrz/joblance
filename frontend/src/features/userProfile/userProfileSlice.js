import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userProfileService from './userProfileService';

const initialState = {
  userProfile: null,
  userProfiles: [],
  userProfileLoading: false,
  userProfileSuccess: false,
  userProfileError: false,
  userProfileMessage: ''
}

export const getUser  = createAsyncThunk('profile/getUser', async (userId, thunkAPI) => {
  try {
    const userToken = thunkAPI.getState().auth.user.token;
    const responseData = await userProfileService.getUser(userToken, userId);
    return responseData;
  } catch (error){
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const userProfileSlice = createSlice({
  name: 'userProfile',
  initialState,
  reducers: {
    reset: (state) => initialState
  },
  extraReducers : (builder)=> {
    builder
      // get user profile
      .addCase(getUser.pending, (state)=> {
        state.userProfileLoading=true
      })
      .addCase(getUser.fulfilled, (state, action)=> {
        state.userProfile=action.payload
        state.userProfileLoading=false
        state.userProfileSuccess=true;
        state.userProfileError=false;

      })
      .addCase(getUser.rejected, (state, action)=> {
        state.userProfileMessage = action.payload
        state.userProfileError=true;
        state.userProfileLoading=false;
        state.userProfileSuccess=false;
      })
  }

})

export const {reset} = userProfileSlice.actions
export default userProfileSlice.reducer