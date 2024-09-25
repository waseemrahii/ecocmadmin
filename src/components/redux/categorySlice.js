import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// API Endpoints
const API_URL = 'https://lionfish-app-tdhk5.ondigitalocean.app/api/categories';

// Fetch categories
export const fetchCategories = createAsyncThunk(
  'productCategory/fetchCategories',
  async (searchParams, { rejectWithValue }) => {
    try {
      const response = await axios.get(API_URL, { params: searchParams });
      return response.data.doc;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Get category by ID
export const fetchCategoryById = createAsyncThunk(
  'productCategory/fetchCategoryById',
  async (categoryId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}/${categoryId}`);
      return response.data.doc;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Create category
export const createCategory = createAsyncThunk(
  'productCategory/createCategory',
  async (categoryData, { rejectWithValue }) => {
    try {
      const response = await axios.post(API_URL, categoryData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Update category
export const updateCategory = createAsyncThunk(
  'productCategory/updateCategory',
  async ({ categoryId, categoryData }, { rejectWithValue }) => {
    try {
      const formData = new FormData();
      for (const key in categoryData) {
        formData.append(key, categoryData[key]);
      }

      const response = await axios.put(`${API_URL}/${categoryId}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data.doc;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Update category status
export const updateCategoryStatus = createAsyncThunk(
  'productCategory/updateCategoryStatus',
  async ({ categoryId, status }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`${API_URL}/${categoryId}/status`, { status });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Delete category
export const deleteCategory = createAsyncThunk(
  'productCategory/deleteCategory',
  async (categoryId, { rejectWithValue }) => {
    try {
      await axios.delete(`${API_URL}/${categoryId}`);
      return categoryId;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Initial state
const initialState = {
  categories: [],
  currentCategory: null,
  loading: false,
  error: null,
};

// Create slice
const productCategorySlice = createSlice({
  name: 'productCategory',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      })
      .addCase(fetchCategoryById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCategoryById.fulfilled, (state, action) => {
        state.loading = false;
        state.currentCategory = action.payload;
      })
      .addCase(fetchCategoryById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      })
      .addCase(createCategory.pending, (state) => {
        state.loading = true;
      })
      .addCase(createCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.categories.push(action.payload);
      })
      .addCase(createCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      })
      .addCase(updateCategory.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateCategory.fulfilled, (state, action) => {
        state.loading = false;
        const updatedCategory = action.payload;
        state.categories = state.categories.map((c) =>
          c._id === updatedCategory._id ? updatedCategory : c
        );
        if (state.currentCategory && state.currentCategory._id === updatedCategory._id) {
          state.currentCategory = updatedCategory;
        }
      })
      .addCase(updateCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      })
      .addCase(updateCategoryStatus.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateCategoryStatus.fulfilled, (state, action) => {
        state.loading = false;
        const updatedCategory = action.payload;
        state.categories = state.categories.map((c) =>
          c._id === updatedCategory._id ? updatedCategory : c
        );
        if (state.currentCategory && state.currentCategory._id === updatedCategory._id) {
          state.currentCategory = updatedCategory;
        }
      })
      .addCase(updateCategoryStatus.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      })
      .addCase(deleteCategory.fulfilled, (state, action) => {
        const categoryId = action.payload;
        state.categories = state.categories.filter((c) => c._id !== categoryId);
        if (state.currentCategory && state.currentCategory._id === categoryId) {
          state.currentCategory = null;
        }
      });
  },
});

export default productCategorySlice.reducer;
