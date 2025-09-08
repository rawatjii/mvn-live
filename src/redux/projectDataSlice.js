import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { FRONTEND_API_BASE_URL } from '../config/config';

// Async thunk expecting projectname as an argument
export const fetchProject = createAsyncThunk(
  'project/fetchProject',
  async (projectname, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${FRONTEND_API_BASE_URL}project/${projectname}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Failed to fetch project');
    }
  }
);

const fetchProjectSlice = createSlice({
  name: 'project',
  initialState: {
    project: null,
    loading: false,
    error: null,
  },
  reducers: {
    clearproject: (state) => {
      state.project = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProject.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProject.fulfilled, (state, action) => {
        console.log(action)
        state.loading = false;
        state.project = action.payload;
      })
      .addCase(fetchProject.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearProject } = fetchProjectSlice.actions;
export default fetchProjectSlice.reducer;