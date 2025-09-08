import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { FRONTEND_API_BASE_URL } from '../config/config';
export const fetchBanner = createAsyncThunk(
  'banner/fetchBanner',
  async (projectId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${FRONTEND_API_BASE_URL}project/${projectId}/banner`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Failed to fetch banner');
    }
  }
);

const bannerSlice = createSlice({
  name: 'banner',
  initialState: {
    banner: null,
    loading: false,
    error: null,
  },
  reducers: {
    clearBanner: (state) => {
      state.banner = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBanner.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBanner.fulfilled, (state, action) => {
        state.loading = false;
        state.banner = action.payload;
      })
      .addCase(fetchBanner.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearBanner } = bannerSlice.actions;
export default bannerSlice.reducer;
