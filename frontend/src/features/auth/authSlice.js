import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import authService from './authService'

const user = JSON.parse(localStorage.getItem('user'));

const initialState = {
  user: user ? user : null,
  authError: false,
  authSuccess: false,
  authLoading: false,
  authMessage: ''
}

export const register = createAsyncThunk('auth/register', async (user, thunkAPI)=> {
  try {
    return await authService.registerUser(user);
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    return thunkAPI.rejectWithValue(message)
  }
});

export const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
  try {
    return await authService.loginUser(user);
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const logout = createAsyncThunk('auth/logout', async (user, thunkAPI) => {
  try {
    await authService.logoutUser();
  } catch (error) {
    console.log(error)
  }
});

export const authSlice = createSlice({
  name:'auth',
  initialState: initialState,
  reducers: {
    reset: (state) => {
      state.isError=false;
      state.isLoading = false;
      state.isSuccess = false;
      state.message= '';
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state)=>{state.isLoading=true})
      .addCase(register.fulfilled, (state, action)=> {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload.user;

      })
      .addCase(register.rejected, (state, action)=> {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.user=null
      })
      .addCase(login.pending, (state)=>{state.isLoading=true})
      .addCase(login.fulfilled, (state, action)=> {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload.message
        state.user = action.payload.user;
      })
      .addCase(login.rejected, (state, action)=> {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.user=null
      })
      .addCase(logout.fulfilled, (state)=> {
        state.user=null;
      })
  }
});


export const {reset} = authSlice.actions
export default authSlice.reducer