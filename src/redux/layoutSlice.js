import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { FRONTEND_API_BASE_URL } from '../config/config';

// Async thunk for fetching pageLinks
export const fetchPageLinks = createAsyncThunk(
  'layout/fetchPageLinks',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${FRONTEND_API_BASE_URL}platter-project`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Failed to fetch page links');
    }
  }
);

// Async thunk for fetching contactData
export const fetchContactData = createAsyncThunk(
  'layout/fetchContactData',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${FRONTEND_API_BASE_URL}page/page-section/contact-us`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Failed to fetch contact data');
    }
  }
);

// Async thunk for fetching microPageSections
export const fetchMicroPageSections = createAsyncThunk(
  'layout/fetchMicroPageSections',
  async ({ microId, pathname }, { rejectWithValue }) => {
    try {
      const isTheme = pathname.includes('aeroone-gurgaon') ? 2 : 1;
      const response = await axios.get(
        `${FRONTEND_API_BASE_URL}project/${microId}/project-section-nav?is_theme=${isTheme}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Failed to fetch micro page sections');
    }
  }
);

const layoutSlice = createSlice({
  name: 'layout',
  initialState: {
    pageLinks: null,
    contactData: null,
    microPageSections: null,
    loading: {
      pageLinks: false,
      contactData: false,
      microPageSections: false,
    },
    error: {
      pageLinks: null,
      contactData: null,
      microPageSections: null,
    },
  },
  reducers: {
    clearLayout: (state) => {
      state.pageLinks = null;
      state.contactData = null;
      state.microPageSections = null;
      state.loading = {
        pageLinks: false,
        contactData: false,
        microPageSections: false,
      };
      state.error = {
        pageLinks: null,
        contactData: null,
        microPageSections: null,
      };
    },
  },
  extraReducers: (builder) => {
    // Handle fetchPageLinks
    builder
      .addCase(fetchPageLinks.pending, (state) => {
        state.loading.pageLinks = true;
        state.error.pageLinks = null;
      })
      .addCase(fetchPageLinks.fulfilled, (state, action) => {
        state.loading.pageLinks = false;
        state.pageLinks = action.payload;
      })
      .addCase(fetchPageLinks.rejected, (state, action) => {
        state.loading.pageLinks = false;
        state.error.pageLinks = action.payload;
      })
      // Handle fetchContactData
      .addCase(fetchContactData.pending, (state) => {
        state.loading.contactData = true;
        state.error.contactData = null;
      })
      .addCase(fetchContactData.fulfilled, (state, action) => {
        state.loading.contactData = false;
        state.contactData = action.payload;
      })
      .addCase(fetchContactData.rejected, (state, action) => {
        state.loading.contactData = false;
        state.error.contactData = action.payload;
      })
      // Handle fetchMicroPageSections
      .addCase(fetchMicroPageSections.pending, (state) => {
        state.loading.microPageSections = true;
        state.error.microPageSections = null;
      })
      .addCase(fetchMicroPageSections.fulfilled, (state, action) => {
        state.loading.microPageSections = false;
        state.microPageSections = action.payload;
      })
      .addCase(fetchMicroPageSections.rejected, (state, action) => {
        state.loading.microPageSections = false;
        state.error.microPageSections = action.payload;
      });
  },
});

export const { clearLayout } = layoutSlice.actions;
export default layoutSlice.reducer;