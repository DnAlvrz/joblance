import {createAsyncThunk,createSlice} from '@reduxjs/toolkit';
import applicationService from './applicationService';

const initialState = {
  applications: [],
  applicationsError: false,
  applicationsSuccess: false,
  applicationsLoading: false,
  applicationsMessage: ''
};

export const rejectApplication = createAsyncThunk('contract/rejectApplication', async (applicationId, thunkAPI) => {
  try {
    const userToken = thunkAPI.getState().auth.user.token;
    const responseData = await applicationService.rejectApplication(userToken, applicationId);
    return responseData;
  } catch (error){
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});


export const sendJobApplication = createAsyncThunk('jobs/sendJobApplicaiton', async(applicationData, thunkAPI ) => {
  try {
    const userToken = thunkAPI.getState().auth.user.token;
    console.log(applicationData);
    return await applicationService.sendApplication(userToken, applicationData);
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const applicationSlice = createSlice({
  name: 'applications',
  initialState,
  reducers: {
    reset: (state) => initialState
  },
  extraReducers : (builder)=> {
    builder
      //  Reject application
      .addCase(rejectApplication.pending, (state)=> {state.contractLoading=true})
      .addCase(rejectApplication.fulfilled, (state, action) => {
        state.applicationsLoading=false
        state.applicationsSuccess=true;
        state.applicationsError=false
      })
      .addCase(rejectApplication.rejected, (state, action)=> {
        state.applicationsLoading=false;
        state.applicationsError=true;
        state.applicationsSuccess=false;
        state.applicationsMessage = action.payload
      })

      // Create Job Application
      .addCase(sendJobApplication.pending, (state)=> {state.isLoading=true})
      .addCase(sendJobApplication.fulfilled, (state)=> {
        state.applicationsLoading=false
        state.applicationsSuccess = true;
        state.applicationsError = false
      })
      .addCase(sendJobApplication.rejected, (state, action)=> {
        state.applicationsLoading=false;
        state.applicationsError = true;
        state.applicationsSuccess=false;
        state.applicationsMessage = action.payload
      })
  }
});

export const {reset} = applicationSlice.actions
export default applicationSlice.reducer