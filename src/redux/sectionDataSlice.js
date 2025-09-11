import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { FRONTEND_API_BASE_URL } from '../config/config';

// Helper to read cache from localStorage
const getLocalSectionCache = () => {
  const cached = localStorage.getItem('sectionCache');
  return cached ? JSON.parse(cached) : {};
};

// Helper to save cache to localStorage
const setLocalSectionCache = (cache) => {
  localStorage.setItem('sectionCache', JSON.stringify(cache));
};

export const fetchSectionById = createAsyncThunk(
  'section/fetchSectionById',
  async (sectionId, { rejectWithValue }) => {
    try {
      const cached = getLocalSectionCache()[sectionId];

      // Use cache if fresh (5 minutes)
      if (cached && Date.now() - cached.timestamp < 5 * 60 * 1000) {
        return { sectionId, data: cached.data, fromCache: true };
      }

      const response = await axios.get(`${FRONTEND_API_BASE_URL}/project/${sectionId}/project-section`);
      
      return { sectionId, data: response.data, fromCache: false };
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message || 'Failed to fetch section';
      return rejectWithValue({ message: errorMessage, status: error.response?.status });
    }
  }
);

const sectionSlice = createSlice({
  name: 'section',
  initialState: {
    sectionData: null,
    sectionCache: getLocalSectionCache(),  // Initialize from localStorage
    loading: false,
    error: null,
  },
  reducers: {
    clearSection: (state) => {
      state.sectionData = null;
      state.loading = false;
      state.error = null;
    },
    clearSectionCache: (state) => {
      state.sectionCache = {};
      localStorage.removeItem('sectionCache');
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSectionById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSectionById.fulfilled, (state, action) => {
        state.loading = false;

        const { sectionId, data, fromCache } = action.payload;

        if (!fromCache) {
          state.sectionCache[sectionId] = {
            data,
            timestamp: Date.now()
          };

          // Save updated cache to localStorage
          setLocalSectionCache(state.sectionCache);
        }

        state.sectionData = data;
      })
      .addCase(fetchSectionById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearSection, clearSectionCache } = sectionSlice.actions;
export default sectionSlice.reducer;
