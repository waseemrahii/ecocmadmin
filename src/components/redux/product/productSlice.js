// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// // API Endpoints
// const API_URL = 'http://localhost:3000/api/products/';

// // Fetch products with dynamic query parameters
// export const fetchProducts = createAsyncThunk(
//   'product/fetchProducts',
//   async (searchParams = {}, { rejectWithValue }) => {
//     try {
//       const response = await axios.get(API_URL, { params: searchParams });
//       return response.data; // Return the whole `doc` object
//     } catch (error) {
//       return rejectWithValue(error.response?.data || error.message);
//     }
//   }
// );

// // Fetch product by ID
// export const fetchProductById = createAsyncThunk(
//   'product/fetchProductById',
//   async (productId, { rejectWithValue }) => {
//     try {
//       const response = await axios.get(`${API_URL}/${productId}`);
//       return response.data.doc; // Accessing product data from the `docs` field
//     } catch (error) {
//       return rejectWithValue(error.response?.data || error.message);
//     }
//   }
// );

// // Create product
// export const createProduct = createAsyncThunk(
//   'product/createProduct',
//   async (productData, { rejectWithValue }) => {
//     try {
//       const response = await axios.post(API_URL, productData);
//       return response.data.doc; // Ensure the response contains the created product
//     } catch (error) {
//       return rejectWithValue(error.response?.data || error.message);
//     }
//   }
// );

// // Update product
// export const updateProduct = createAsyncThunk(
//   'product/updateProduct',
//   async ({ productId, productData }, { rejectWithValue }) => {
//     try {
//       const response = await axios.put(`${API_URL}/${productId}`, productData);
//       return response.data.doc; // Ensure the response contains the updated product
//     } catch (error) {
//       return rejectWithValue(error.response?.data || error.message);
//     }
//   }
// );

// // Delete product
// export const deleteProduct = createAsyncThunk(
//   'product/deleteProduct',
//   async (productId, { rejectWithValue }) => {
//     try {
//       await axios.delete(`${API_URL}/${productId}`);
//       return productId;
//     } catch (error) {
//       return rejectWithValue(error.response?.data || error.message);
//     }
//   }
// );

// // Toggle featured status
// export const toggleFeatured = createAsyncThunk(
//   'product/toggleFeatured',
//   async ({ productId, isFeatured }, { rejectWithValue }) => {
//     try {
//       const response = await axios.put(`${API_URL}/${productId}/feature`, { isFeatured });
//       return response.data.doc; // Ensure the response contains the updated product
//     } catch (error) {
//       return rejectWithValue(error.response?.data || error.message);
//     }
//   }
// );

// // Update product status
// export const updateProductStatus = createAsyncThunk(
//   'product/updateProductStatus',
//   async ({ productId, status }, { rejectWithValue }) => {
//     try {
//       const response = await axios.put(`${API_URL}/${productId}/status`, { status });
//       return response.data.docs; // Ensure the response contains the updated product
//     } catch (error) {
//       return rejectWithValue(error.response?.data || error.message);
//     }
//   }
// );

// // Initial state
// const initialState = {
//   products: [],
//   currentProduct: null,
//   totalDocs: 0,
//   limit: 10,
//   totalPages: 0,
//   currentPage: 1,
//   pagingCounter: 0,
//   hasPrevPage: false,
//   hasNextPage: false,
//   prevPage: null,
//   nextPage: null,
//   loading: false,
//   error: null,
// };
// // Create slice
// const productSlice = createSlice({
//   name: 'product',
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       // Fetch products
//       .addCase(fetchProducts.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(fetchProducts.fulfilled, (state, action) => {
//         state.loading = false;
//         const { products, totalDocs, limit, totalPages, page, pagingCounter, hasPrevPage, hasNextPage, prevPage, nextPage } = action.payload;
//         state.products = products || [];
//         state.totalDocs = totalDocs || 0;
//         state.limit = limit || 10;
//         state.totalPages = totalPages || 0;
//         state.currentPage = page || 1;
//         state.pagingCounter = pagingCounter || 0;
//         state.hasPrevPage = hasPrevPage || false;
//         state.hasNextPage = hasNextPage || false;
//         state.prevPage = prevPage || null;
//         state.nextPage = nextPage || null;
//       })
//       .addCase(fetchProducts.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload || action.error.message;
//       })
//       // Fetch product by ID
//       .addCase(fetchProductById.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(fetchProductById.fulfilled, (state, action) => {
//         state.loading = false;
//         state.currentProduct = action.payload;
//       })
//       .addCase(fetchProductById.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload || action.error.message;
//       })
//       // Create product
//       .addCase(createProduct.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(createProduct.fulfilled, (state, action) => {
//         state.loading = false;
//         state.products.push(action.payload);
//       })
//       .addCase(createProduct.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload || action.error.message;
//       })
//       // Update product
//       .addCase(updateProduct.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(updateProduct.fulfilled, (state, action) => {
//         state.loading = false;
//         const updatedProduct = action.payload;
//         state.products = state.products.map((p) =>
//           p._id === updatedProduct._id ? updatedProduct : p
//         );
//         if (state.currentProduct && state.currentProduct._id === updatedProduct._id) {
//           state.currentProduct = updatedProduct;
//         }
//       })
//       .addCase(updateProduct.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload || action.error.message;
//       })
//       // Delete product
//       .addCase(deleteProduct.fulfilled, (state, action) => {
//         const productId = action.payload;
//         state.products = state.products.filter((p) => p._id !== productId);
//         if (state.currentProduct && state.currentProduct._id === productId) {
//           state.currentProduct = null;
//         }
//       })
//       // Toggle featured status
//       .addCase(toggleFeatured.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(toggleFeatured.fulfilled, (state, action) => {
//         state.loading = false;
//         const updatedProduct = action.payload;
//         state.products = state.products.map((p) =>
//           p._id === updatedProduct._id ? updatedProduct : p
//         );
//         if (state.currentProduct && state.currentProduct._id === updatedProduct._id) {
//           state.currentProduct = updatedProduct;
//         }
//       })
//       .addCase(toggleFeatured.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload || action.error.message;
//       })
//       // Update product status
//       .addCase(updateProductStatus.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(updateProductStatus.fulfilled, (state, action) => {
//         state.loading = false;
//         const updatedProduct = action.payload;
//         state.products = state.products.map((p) =>
//           p._id === updatedProduct._id ? updatedProduct : p
//         );
//         if (state.currentProduct && state.currentProduct._id === updatedProduct._id) {
//           state.currentProduct = updatedProduct;
//         }
//       })
//       .addCase(updateProductStatus.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload || action.error.message;
//       });
//   },
// });

// export default productSlice.reducer;




import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// API Endpoints
const API_URL = 'https://lionfish-app-tdhk5.ondigitalocean.app/api/products/';

// Fetch products with dynamic query parameters
export const fetchProducts = createAsyncThunk(
  'product/fetchProducts',
  async (searchParams = {}, { rejectWithValue }) => {
    try {
      const response = await axios.get(API_URL, { params: searchParams });
      return response.data.doc; // Return the entire response data
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Fetch product by ID
export const fetchProductById = createAsyncThunk(
  'product/fetchProductById',
  async (productId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}/${productId}`);
      return response.data.doc; // Accessing product data from the `doc` field
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Create product
export const createProduct = createAsyncThunk(
  'product/createProduct',
  async (productData, { rejectWithValue }) => {
    try {
      const response = await axios.post(API_URL, productData);
      return response.data.doc; // Ensure the response contains the created product
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Update product
export const updateProduct = createAsyncThunk(
  'product/updateProduct',
  async ({ productId, productData }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`${API_URL}/${productId}`, productData);
      return response.data.doc; // Ensure the response contains the updated product
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Delete product
export const deleteProduct = createAsyncThunk(
  'product/deleteProduct',
  async (productId, { rejectWithValue }) => {
    try {
      await axios.delete(`${API_URL}/${productId}`);
      return productId;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Toggle featured status
export const toggleFeatured = createAsyncThunk(
  'product/toggleFeatured',
  async ({ productId, isFeatured }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`${API_URL}/${productId}/feature`, { isFeatured });
      return response.data.doc; // Ensure the response contains the updated product
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Update product status
export const updateProductStatus = createAsyncThunk(
  'product/updateProductStatus',
  async ({ productId, status }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`${API_URL}/${productId}/status`, { status });
      return response.data.doc; // Ensure the response contains the updated product
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Initial state
const initialState = {
  status: "", // Will store "success" or other status from the API response
  cached: false, // Will store the cached status
  results: 0, // Number of results returned
  products: [], // Array of product objects
  loading: false, // To indicate if data is being fetched
  error: null, 
};

// Create slice
const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch products
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        const { status, cached, results, doc } = action.payload;
        state.status = status || "";
        state.cached = cached || false;
        state.results = results || 0;
        state.products = doc || []; // Update with the product list
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      })
      // Fetch product by ID
      .addCase(fetchProductById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.loading = false;
        state.currentProduct = action.payload;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      })
      // Create product
      .addCase(createProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.products.push(action.payload);
      })
      .addCase(createProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      })
      // Update product
      .addCase(updateProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.loading = false;
        const updatedProduct = action.payload;
        state.products = state.products.map((p) =>
          p._id === updatedProduct._id ? updatedProduct : p
        );
        if (state.currentProduct && state.currentProduct._id === updatedProduct._id) {
          state.currentProduct = updatedProduct;
        }
      })
      .addCase(updateProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      })
      // Delete product
      .addCase(deleteProduct.fulfilled, (state, action) => {
        const productId = action.payload;
        state.products = state.products.filter((p) => p._id !== productId);
        if (state.currentProduct && state.currentProduct._id === productId) {
          state.currentProduct = null;
        }
      })
      // Toggle featured status
      .addCase(toggleFeatured.pending, (state) => {
        state.loading = true;
      })
      .addCase(toggleFeatured.fulfilled, (state, action) => {
        state.loading = false;
        const updatedProduct = action.payload;
        state.products = state.products.map((p) =>
          p._id === updatedProduct._id ? updatedProduct : p
        );
        if (state.currentProduct && state.currentProduct._id === updatedProduct._id) {
          state.currentProduct = updatedProduct;
        }
      })
      .addCase(toggleFeatured.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      })
      // Update product status
      .addCase(updateProductStatus.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateProductStatus.fulfilled, (state, action) => {
        state.loading = false;
        const updatedProduct = action.payload;
        state.products = state.products.map((p) =>
          p._id === updatedProduct._id ? updatedProduct : p
        );
        if (state.currentProduct && state.currentProduct._id === updatedProduct._id) {
          state.currentProduct = updatedProduct;
        }
      })
      .addCase(updateProductStatus.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      });
  },
});

export default productSlice.reducer;
