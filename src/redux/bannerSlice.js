import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { FRONTEND_API_BASE_URL } from '../config/config';

// Helper to read cache from localStorage
const getLocalCache = () => {
  const cached = localStorage.getItem('bannerCache');
  return cached ? JSON.parse(cached) : {};
};

// Helper to save cache to localStorage
const setLocalCache = (cache) => {
  localStorage.setItem('bannerCache', JSON.stringify(cache));
};

export const fetchBanner = createAsyncThunk(
  'banner/fetchBanner',
  async (projectId, { rejectWithValue }) => {
    try {
      const cached = getLocalCache()[projectId];

      // Use cache if valid (5 min freshness)
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
    banner: null,
    bannerCache: getLocalCache(), // Initialize from localStorage
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
      localStorage.removeItem('bannerCache');
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

        if (!fromCache) {
          state.bannerCache[projectId] = {
            data,
            timestamp: Date.now()
          };

          // Save updated cache to localStorage
          setLocalCache(state.bannerCache);
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
