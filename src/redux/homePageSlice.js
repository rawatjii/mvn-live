import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { FRONTEND_API_BASE_URL } from '../config/config';

export const fetchhome = createAsyncThunk(
  'home/fetchhome',
  async (_,{ rejectWithValue }) => {
    try {
      const response = await axios.get(`${FRONTEND_API_BASE_URL}page/page-section/home`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Failed to fetch home');
    }
  }
);

const fetchhomeSlice = createSlice({
  name: 'home',
  initialState: {
    home: null,
    loading: false,
    error: null,
  },
  reducers: {
    clearhome: (state) => {
      state.home = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchhome.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchhome.fulfilled, (state, action) => {
        console.log(action)
        state.loading = false;
        state.home = action.payload;
      })
      .addCase(fetchhome.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearhome } = fetchhomeSlice.actions;
export default fetchhomeSlice.reducer;