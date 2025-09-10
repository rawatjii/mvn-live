import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { FRONTEND_API_BASE_URL } from '../config/config';

// Async thunk to fetch banner data with caching logic
export const fetchBanner = createAsyncThunk(
  'banner/fetchBanner',
  async (projectId, { getState, rejectWithValue }) => {
    try {
      const state = getState();
      const cached = state.banner.bannerCache[projectId];

      // Use cache if valid (5 minutes freshness)
      if (cached && Date.now() - cached.timestamp < 5 * 60 * 1000) {
        return { projectId, data: cached.data, fromCache: true };
      }

      const response = await axios.get(`${FRONTEND_API_BASE_URL}project/${projectId}/banner`);
      
      return { projectId, data: response.data, fromCache: false };
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Failed to fetch banner');
    }
  }
);

const bannerSlice = createSlice({
  name: 'banner',
  initialState: {
    banner: null,             // Current banner data
    bannerCache: {},          // Cache: { [projectId]: { data, timestamp } }
    loading: false,
    error: null,
  },
  reducers: {
    clearBanner: (state) => {
      state.banner = null;
      state.loading = false;
      state.error = null;
    },
    clearCache: (state) => {
      state.bannerCache = {};
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBanner.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBanner.fulfilled, (state, action) => {
        state.loading = false;

        const { projectId, data, fromCache } = action.payload;

        // Only store in cache if data is freshly fetched
        if (!fromCache) {
          state.bannerCache[projectId] = {
            data,
            timestamp: Date.now()
          };
        }

        state.banner = data;
      })
      .addCase(fetchBanner.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export const { clearBanner, clearCache } = bannerSlice.actions;
export default bannerSlice.reducer;
