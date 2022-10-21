import {createAsyncThunk,createSlice} from '@reduxjs/toolkit';
import jobService from './jobService'


const initialState = {
  job:{},
  jobs: [],
  count: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: ''
};

export const createJob = createAsyncThunk('jobs/create', async (jobData, thunkAPI) => {
  try {
    const userToken = thunkAPI.getState().auth.user.token;
    const responseData = await jobService.createJob(jobData.jobDetails, userToken);
   await jobService.addJobPhoto(responseData.id, jobData.photos, userToken);
    return responseData;
  } catch (error){
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const getOpenJobs = createAsyncThunk('jobs/getOpenJobs', async (page, thunkAPI) => {
  try {

    const userToken = thunkAPI.getState().auth.user.token
    return await jobService.getJobs(userToken, page);
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const getJob = createAsyncThunk('jobs/getJob', async (jobId, thunkAPI) => {
  try {

    const userToken = thunkAPI.getState().auth.user.token
    return await jobService.getJob(userToken, jobId);
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const getUserJob = createAsyncThunk('jobs/getUserJob', async (jobId, thunkAPI) => {
  try {
    const userToken = thunkAPI.getState().auth.user.token
    return await jobService.getUserJobs(userToken);
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const jobSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
    reset: (state) => initialState
  },
  extraReducers : (builder)=> {
    builder
      // Create
      .addCase(createJob.pending, (state)=> {state.isLoading=true})
      .addCase(createJob.fulfilled, (state, action)=> {
        state.isLoading=false
        state.isSuccess = true;
        state.isError = false
        state.jobs.push(action.payload)
      })
      .addCase(createJob.rejected, (state, action)=> {
        state.isLoading=false;
        state.isError = true;
        state.isSuccess=false;
        state.message = action.payload
      })
      // GET Jobs
      .addCase(getOpenJobs.pending, (state)=> {
        state.isLoading=true
      })
      .addCase(getOpenJobs.fulfilled, (state, action)=> {
        state.isLoading=false
        state.jobs = action.payload.jobs
        state.count = action.payload.jobsCount
      })
      .addCase(getOpenJobs.rejected, (state, action)=> {
        state.isLoading=false;
        state.isError = true;
        state.message = action.payload
      })
      // View Job
      .addCase(getJob.pending, (state)=> {
        state.isLoading=true
      })
      .addCase(getJob.fulfilled, (state, action)=> {
        state.isLoading=false
        state.job = action.payload
      })
      .addCase(getJob.rejected, (state, action)=> {
        state.isLoading=false;
        state.isError = true;
        state.message = action.payload
      })
      //GET User jobs
      .addCase(getUserJob.pending, (state)=> {
        state.isLoading=true
      })
      .addCase(getUserJob.fulfilled, (state, action)=> {
        state.isLoading=false
        state.jobs=action.payload
      })
      .addCase(getUserJob.rejected, (state, action)=> {
        state.isLoading=false;
        state.isError = true;
        state.message = action.payload
      })
  }
});

export const {reset} = jobSlice.actions
export default jobSlice.reducer