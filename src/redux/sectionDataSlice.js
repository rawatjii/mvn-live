import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { FRONTEND_API_BASE_URL } from '../config/config';

// Async thunk for fetching section data by ID
export const fetchSectionById = createAsyncThunk(
  'section/fetchSectionById',
  async (sectionId, { rejectWithValue }) => {
    console.log(sectionId)
    try {
      const response = await axios.get(`${FRONTEND_API_BASE_URL}/project/${sectionId}/project-section`);
      return response.data;
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message || 'Failed to fetch section';
      return rejectWithValue({ message: errorMessage, status: error.response?.status });
    }
  }
);

const sectionSlice = createSlice({
  name: 'section',
  initialState: {
    sectionData: null, // Consistent naming
    loading: false,
    error: null,
  },
  reducers: {
    clearSection: (state) => {
      state.sectionData = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSectionById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSectionById.fulfilled, (state, action) => {
        state.loading = false;
        state.sectionData = action.payload;
      })
      .addCase(fetchSectionById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearSection } = sectionSlice.actions;
export default sectionSlice.reducer;