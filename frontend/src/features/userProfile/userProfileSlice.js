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

export const updateUserAbout  = createAsyncThunk('profile/updateUserAbout', async ( data, thunkAPI) => {
  try {
    const userToken = thunkAPI.getState().auth.user.token;
    const responseData = await userProfileService.updateUserAbout(userToken, data.userId, data.aboutData);
    return responseData;
  } catch (error){
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const addEducation  = createAsyncThunk('profile/addEducation', async ( data, thunkAPI) => {
  try {
    const userToken = thunkAPI.getState().auth.user.token;
    const responseData = await userProfileService.addEducation(userToken, data.id, data);
    return responseData;
  } catch (error){
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const addSkills  = createAsyncThunk('profile/addSkills', async (data, thunkAPI) => {
  try {
    const userToken = thunkAPI.getState().auth.user.token;
    const responseData = await userProfileService.addSkills(userToken, data.id, data.skills);
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
        state.userProfileError=false;
        state.userProfile=action.payload
      })
      .addCase(getUser.rejected, (state, action)=> {
        state.userProfileMessage = action.payload
        state.userProfileError=true;
        state.userProfileLoading=false;
        state.userProfileSuccess=false;
      })
      // Update User About
      .addCase(updateUserAbout.pending, (state)=> {
        state.userProfileLoading=true
      })
      .addCase(updateUserAbout.fulfilled, (state, action)=> {
        state.userProfile=action.payload
        state.userProfileLoading=false
        state.userProfileSuccess=true;
        state.userProfileError=false;
        state.userProfile  = action.payload
      })
      .addCase(updateUserAbout.rejected, (state, action)=> {
        state.userProfileMessage = action.payload
        state.userProfileError=true;
        state.userProfileLoading=false;
        state.userProfileSuccess=false;
      })
      // Update User Education
      .addCase(addEducation.pending, (state)=> {
        state.userProfileLoading=true
      })
      .addCase(addEducation.fulfilled, (state, action)=> {
        state.userProfile=action.payload
        state.userProfileLoading=false
        state.userProfileSuccess=true;
        state.userProfileError=false;
        state.userProfile  = action.payload
      })
      .addCase(addEducation.rejected, (state, action)=> {
        state.userProfileMessage = action.payload
        state.userProfileError=true;
        state.userProfileLoading=false;
        state.userProfileSuccess=false;
      })
      // Update User skills
      .addCase(addSkills.pending, (state)=> {
        state.userProfileLoading=true
      })
      .addCase(addSkills.fulfilled, (state, action)=> {
        state.userProfile=action.payload
        state.userProfileLoading=false
        state.userProfileSuccess=true;
        state.userProfileError=false;
        state.userProfile  = action.payload
      })
      .addCase(addSkills.rejected, (state, action)=> {
        state.userProfileMessage = action.payload
        state.userProfileError=true;
        state.userProfileLoading=false;
        state.userProfileSuccess=false;
      })



  }

})

export const {reset} = userProfileSlice.actions
export default userProfileSlice.reducer