

// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// // Fetch categories
// export const fetchCategories = createAsyncThunk(
//   'category/fetchCategories',
//   async () => {
//     const response = await axios.get('http://localhost:3000/api/categories/');
//     return response.data.doc || []; // Assuming response.data.docs contains the array of categories
//   }
// );

// // Fetch brands
// export const fetchBrands = createAsyncThunk(
//   'category/fetchBrands',
//   async () => {
//     const response = await axios.get('http://localhost:3000/api/brands/');
//     return response.data.doc || []; // Handle cases where response.data.docs might not be an array
//   }
// );

// // Fetch colors
// export const fetchColors = createAsyncThunk(
//   'category/fetchColors',
//   async () => {
//     const response = await axios.get('http://localhost:3000/api/colors/');
//     return response.data.doc|| []; // Assuming response.data.docs contains the array of colors
//   }
// );

// export const fetchAttributes = createAsyncThunk('attributes/fetchAttributes', async () => {
//   const response = await axios.get('http://localhost:3000/api/attributes/');
//   return response.data.doc;
// });
// // Fetch sub-categories by main category slug
// export const fetchSubCategories = createAsyncThunk(
//   'category/fetchSubCategories',
//   async (mainCategorySlug) => {
//     const response = await axios.get(`http://localhost:3000/api/sub-categories/main-category/${mainCategorySlug}`);
//     return response.data.doc || [];  // Handle cases where response.data.docs.subCategories might not be an array
//   }
// );

// // Fetch sub-sub-categories by sub-category slug
// export const fetchSubSubCategories = createAsyncThunk(
//   'category/fetchSubSubCategories',
//   async (subCategorySlug) => {
//     const response = await axios.get(`http://localhost:3000/api/sub-sub-categories/subcategory/${subCategorySlug}`);
//     return response.data.doc || [];  // Handle cases where response.data.docs.subSubCategories might not be an array
//   }
// );

// const initialState = {
//   categories: [],
//   brands: [],
//   colors: [],
//   attributes: [],
//   subCategories: [],
//   subSubCategories: [],
//   loading: false,
//   error: null,
// };

// const categorySlice = createSlice({
//   name: 'category',
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       // Fetch categories
//       .addCase(fetchCategories.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(fetchCategories.fulfilled, (state, action) => {
//         state.loading = false;
//         state.categories = action.payload; // Assuming payload is an array
//       })
//       .addCase(fetchCategories.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message;
//       })
//       // Fetch brands
//       .addCase(fetchBrands.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(fetchBrands.fulfilled, (state, action) => {
//         state.loading = false;
//         state.brands = action.payload; // Assuming payload is an array
//       })
//       .addCase(fetchBrands.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message;
//       })
//       // Fetch colors
//       .addCase(fetchColors.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(fetchColors.fulfilled, (state, action) => {
//         state.loading = false;
//         state.colors = action.payload; // Assuming payload is an array
//       })
//       .addCase(fetchColors.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message;
//       })
//       .addCase(fetchAttributes.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(fetchAttributes.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.attributes = action.payload;
//       })
//       .addCase(fetchAttributes.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message;
//       })
//       // Fetch sub-categories
//       .addCase(fetchSubCategories.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(fetchSubCategories.fulfilled, (state, action) => {
//         state.loading = false;
//         state.subCategories = action.payload; // Assuming payload is an array
//       })
//       .addCase(fetchSubCategories.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message;
//       })
//       // Fetch sub-sub-categories
//       .addCase(fetchSubSubCategories.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(fetchSubSubCategories.fulfilled, (state, action) => {
//         state.loading = false;
//         state.subSubCategories = action.payload; // Assuming payload is an array
//       })
//       .addCase(fetchSubSubCategories.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message;
//       });
//   },
// });

// export default categorySlice.reducer;



//////////////correct 

// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// // Fetch categories
// export const fetchCategories = createAsyncThunk(
//   'category/fetchCategories',
//   async () => {
//     const response = await axios.get('http://localhost:3000/api/categories/');
//     return response.data.doc || []; // Return the array of categories
//   }
// );
// // Fetch brands
// export const fetchBrands = createAsyncThunk(
//   'category/fetchBrands',
//   async () => {
//     const response = await axios.get('http://localhost:3000/api/brands/');
//     return response.data.doc || []; // Return the array of brands
//   }
// );
// // Fetch colors
// export const fetchColors = createAsyncThunk(
//   'category/fetchColors',
//   async () => {
//     const response = await axios.get('http://localhost:3000/api/colors/');
//     return response.data.doc || []; // Return the array of colors
//   }
// );
// // Fetch attributes
// export const fetchAttributes = createAsyncThunk(
//   'attributes/fetchAttributes',
//   async () => {
//     const response = await axios.get('http://localhost:3000/api/attributes/');
//     return response.data.doc || []; // Return the array of attributes
//   }
// );
// // Fetch sub-categories by main category ID
// export const fetchSubCategories = createAsyncThunk(
//   'category/fetchSubCategories',
//   async (mainCategoryId) => {
//     const response = await axios.get(`http://localhost:3000/api/sub-categories?mainCategory=${mainCategoryId}`);
//     return response.data.doc || []; // Return the array of sub-categories
//   }
// );
// export const fetchSubSubCategories = createAsyncThunk(
//   'category/fetchSubSubCategories',
//   async ({ mainCategoryId, subCategoryId }) => {
//     try {
//       // Build the query parameters based on the presence of IDs
//       let url = 'http://localhost:3000/api/sub-sub-categories';
//       const params = new URLSearchParams();

//       if (mainCategoryId) {
//         params.append('mainCategory', mainCategoryId);
//       }
//       if (subCategoryId) {
//         params.append('subCategory', subCategoryId);
//       }

//       if (params.toString()) {
//         url += `?${params.toString()}`;
//       }

//       const response = await axios.get(url);
//       return response.data || {}; // Return the full response object for status and pagination info
//     } catch (error) {
//       throw new Error('Failed to fetch sub-sub-categories.');
//     }
//   }
// );
// // Add sub-sub-category
// export const addSubSubCategory = createAsyncThunk(
//   'category/addSubSubCategory',
//   async (newSubSubCategory) => {
//     const response = await axios.post('http://localhost:3000/api/sub-sub-categories', newSubSubCategory);
//     return response.data; // Assuming the API returns the added sub-sub-category
//   }
// );
// // Update sub-sub-category
// export const updateSubSubCategory = createAsyncThunk(
//   'category/updateSubSubCategory',
//   async ({ id, updatedData }) => {
//     const response = await axios.put(`http://localhost:3000/api/sub-sub-categories/${id}`, updatedData);
//     return response.data; // Assuming the API returns the updated sub-sub-category
//   }
// );

// // Delete sub-sub-category
// export const deleteSubSubCategory = createAsyncThunk(
//   'category/deleteSubSubCategory',
//   async (id) => {
//     await axios.delete(`http://localhost:3000/api/sub-sub-categories/${id}`);
//     return id; // Return the id of the deleted sub-sub-category
//   }
// );

// const initialState = {
//   categories: [],
//   brands: [],
//   colors: [],
//   attributes: [],
//   subCategories: [],
//   subSubCategories: {
//     status: 'success',
//     cached: false,
//     results: 0,
//     doc: [], // Initialize with an empty array
//   },
//   loading: {
//     categories: false,
//     brands: false,
//     colors: false,
//     attributes: false,
//     subCategories: false,
//     subSubCategories: false,
//   },
//   error: {
//     categories: null,
//     brands: null,
//     colors: null,
//     attributes: null,
//     subCategories: null,
//     subSubCategories: null,
//   },
// };

// const categorySlice = createSlice({
//   name: 'category',
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     // Fetch categories
//     builder
//       .addCase(fetchCategories.pending, (state) => {
//         state.loading.categories = true;
//       })
//       .addCase(fetchCategories.fulfilled, (state, action) => {
//         state.loading.categories = false;
//         state.categories = action.payload;
//       })
//       .addCase(fetchCategories.rejected, (state, action) => {
//         state.loading.categories = false;
//         state.error.categories = action.error.message;
//       })
//       // Fetch brands
//       .addCase(fetchBrands.pending, (state) => {
//         state.loading.brands = true;
//       })
//       .addCase(fetchBrands.fulfilled, (state, action) => {
//         state.loading.brands = false;
//         state.brands = action.payload;
//       })
//       .addCase(fetchBrands.rejected, (state, action) => {
//         state.loading.brands = false;
//         state.error.brands = action.error.message;
//       })
//       // Fetch colors
//       .addCase(fetchColors.pending, (state) => {
//         state.loading.colors = true;
//       })
//       .addCase(fetchColors.fulfilled, (state, action) => {
//         state.loading.colors = false;
//         state.colors = action.payload;
//       })
//       .addCase(fetchColors.rejected, (state, action) => {
//         state.loading.colors = false;
//         state.error.colors = action.error.message;
//       })
//       // Fetch attributes
//       .addCase(fetchAttributes.pending, (state) => {
//         state.loading.attributes = true;
//       })
//       .addCase(fetchAttributes.fulfilled, (state, action) => {
//         state.loading.attributes = false;
//         state.attributes = action.payload;
//       })
//       .addCase(fetchAttributes.rejected, (state, action) => {
//         state.loading.attributes = false;
//         state.error.attributes = action.error.message;
//       })
//       // Fetch sub-categories
//       .addCase(fetchSubCategories.pending, (state) => {
//         state.loading.subCategories = true;
//       })
//       .addCase(fetchSubCategories.fulfilled, (state, action) => {
//         state.loading.subCategories = false;
//         state.subCategories = action.payload;
//       })
//       .addCase(fetchSubCategories.rejected, (state, action) => {
//         state.loading.subCategories = false;
//         state.error.subCategories = action.error.message;
//       })
//       // Fetch sub-sub-categories
//       .addCase(fetchSubSubCategories.pending, (state) => {
//         state.loading.subSubCategories = true;
//       })
//       .addCase(fetchSubSubCategories.fulfilled, (state, action) => {
//         state.loading.subSubCategories = false;
//         state.subSubCategories = action.payload;
//       })
//       .addCase(fetchSubSubCategories.rejected, (state, action) => {
//         state.loading.subSubCategories = false;
//         state.error.subSubCategories = action.error.message;
//       })
//       // Add sub-sub-category
//       .addCase(addSubSubCategory.fulfilled, (state, action) => {
//         state.subSubCategories.doc.push(action.payload); // Add the new sub-sub-category to the list
//         state.subSubCategories.results += 1; // Increment the results count
//       })
//       // Update sub-sub-category
//       .addCase(updateSubSubCategory.fulfilled, (state, action) => {
//         const index = state.subSubCategories.doc.findIndex((item) => item._id === action.payload._id);
//         if (index !== -1) {
//           state.subSubCategories.doc[index] = action.payload; // Update the sub-sub-category
//         }
//       })
//       // Delete sub-sub-category
//       .addCase(deleteSubSubCategory.fulfilled, (state, action) => {
//         state.subSubCategories.doc = state.subSubCategories.doc.filter((item) => item._id !== action.payload); // Remove the deleted sub-sub-category
//         state.subSubCategories.results -= 1; // Decrement the results count
//       });
//   },
// });


// // Export selectors for component use
// export const selectCategories = (state) => state.category.categories;
// export const selectBrands = (state) => state.category.brands;
// export const selectColors = (state) => state.category.colors;
// export const selectAttributes = (state) => state.category.attributes;
// export const selectSubCategories = (state) => state.category.subCategories;
// export const selectSubSubCategories = (state) => state.category.subSubCategories;
// export default categorySlice.reducer;



////////////////////

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Helper function to get the token
const getAuthToken = () => {
  return localStorage.getItem('token'); // Adjust the key name based on how your token is stored
};

// Fetch categories
export const fetchCategories = createAsyncThunk(
  'category/fetchCategories',
  async () => {
    const token = getAuthToken();
    const response = await axios.get('http://localhost:3000/api/categories/', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.doc || []; // Return the array of categories
  }
);

// Fetch brands
export const fetchBrands = createAsyncThunk(
  'category/fetchBrands',
  async () => {
    const token = getAuthToken();
    const response = await axios.get('https://lionfish-app-tdhk5.ondigitalocean.app/api/brands/', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.doc || []; // Return the array of brands
  }
);

// Fetch colors
export const fetchColors = createAsyncThunk(
  'category/fetchColors',
  async () => {
    const token = getAuthToken();
    const response = await axios.get('https://lionfish-app-tdhk5.ondigitalocean.app/api/colors/', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.doc || []; // Return the array of colors
  }
);

// Fetch attributes
export const fetchAttributes = createAsyncThunk(
  'attributes/fetchAttributes',
  async () => {
    const token = getAuthToken();
    const response = await axios.get('https://lionfish-app-tdhk5.ondigitalocean.app/api/attributes/', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.doc || []; // Return the array of attributes
  }
);

// Fetch sub-categories by main category ID
export const fetchSubCategories = createAsyncThunk(
  'category/fetchSubCategories',
  async (mainCategoryId) => {
    const token = getAuthToken();
    const response = await axios.get(`http://localhost:3000/api/sub-categories?mainCategory=${mainCategoryId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.doc || []; // Return the array of sub-categories
  }
);

export const fetchSubSubCategories = createAsyncThunk(
  'category/fetchSubSubCategories',
  async ({ mainCategoryId, subCategoryId }) => {
    try {
      const token = getAuthToken();
      let url = 'http://localhost:3000/api/sub-sub-categories';
      const params = new URLSearchParams();

      if (mainCategoryId) {
        params.append('mainCategory', mainCategoryId);
      }
      if (subCategoryId) {
        params.append('subCategory', subCategoryId);
      }

      if (params.toString()) {
        url += `?${params.toString()}`;
      }

      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data || {}; // Return the full response object for status and pagination info
    } catch (error) {
      throw new Error('Failed to fetch sub-sub-categories.');
    }
  }
);

// Add sub-sub-category
export const addSubSubCategory = createAsyncThunk(
  'category/addSubSubCategory',
  async (newSubSubCategory) => {
    const token = getAuthToken();
    const response = await axios.post('http://localhost:3000/api/sub-sub-categories', newSubSubCategory, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data; // Assuming the API returns the added sub-sub-category
  }
);

// Update sub-sub-category
export const updateSubSubCategory = createAsyncThunk(
  'category/updateSubSubCategory',
  async ({ id, updatedData }) => {
    const token = getAuthToken();
    const response = await axios.put(`http://localhost:3000/api/sub-sub-categories/${id}`, updatedData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data; // Assuming the API returns the updated sub-sub-category
  }
);

// Delete sub-sub-category
export const deleteSubSubCategory = createAsyncThunk(
  'category/deleteSubSubCategory',
  async (id) => {
    const token = getAuthToken();
    await axios.delete(`http://localhost:3000/api/sub-sub-categories/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return id; // Return the id of the deleted sub-sub-category
  }
);



const initialState = {
  categories: [],
  brands: [],
  colors: [],
  attributes: [],
  subCategories: [],
  subSubCategories: {
    status: 'success',
    cached: false,
    results: 0,
    doc: [], // Initialize with an empty array
  },
  loading: {
    categories: false,
    brands: false,
    colors: false,
    attributes: false,
    subCategories: false,
    subSubCategories: false,
  },
  error: {
    categories: null,
    brands: null,
    colors: null,
    attributes: null,
    subCategories: null,
    subSubCategories: null,
  },
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Fetch categories
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loading.categories = true;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading.categories = false;
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading.categories = false;
        state.error.categories = action.error.message;
      })
      // Fetch brands
      .addCase(fetchBrands.pending, (state) => {
        state.loading.brands = true;
      })
      .addCase(fetchBrands.fulfilled, (state, action) => {
        state.loading.brands = false;
        state.brands = action.payload;
      })
      .addCase(fetchBrands.rejected, (state, action) => {
        state.loading.brands = false;
        state.error.brands = action.error.message;
      })
      // Fetch colors
      .addCase(fetchColors.pending, (state) => {
        state.loading.colors = true;
      })
      .addCase(fetchColors.fulfilled, (state, action) => {
        state.loading.colors = false;
        state.colors = action.payload;
      })
      .addCase(fetchColors.rejected, (state, action) => {
        state.loading.colors = false;
        state.error.colors = action.error.message;
      })
      // Fetch attributes
      .addCase(fetchAttributes.pending, (state) => {
        state.loading.attributes = true;
      })
      .addCase(fetchAttributes.fulfilled, (state, action) => {
        state.loading.attributes = false;
        state.attributes = action.payload;
      })
      .addCase(fetchAttributes.rejected, (state, action) => {
        state.loading.attributes = false;
        state.error.attributes = action.error.message;
      })
      // Fetch sub-categories
      .addCase(fetchSubCategories.pending, (state) => {
        state.loading.subCategories = true;
      })
      .addCase(fetchSubCategories.fulfilled, (state, action) => {
        state.loading.subCategories = false;
        state.subCategories = action.payload;
      })
      .addCase(fetchSubCategories.rejected, (state, action) => {
        state.loading.subCategories = false;
        state.error.subCategories = action.error.message;
      })
      // Fetch sub-sub-categories
      .addCase(fetchSubSubCategories.pending, (state) => {
        state.loading.subSubCategories = true;
      })
      .addCase(fetchSubSubCategories.fulfilled, (state, action) => {
        state.loading.subSubCategories = false;
        state.subSubCategories = action.payload;
      })
      .addCase(fetchSubSubCategories.rejected, (state, action) => {
        state.loading.subSubCategories = false;
        state.error.subSubCategories = action.error.message;
      })
      // Add sub-sub-category
      .addCase(addSubSubCategory.fulfilled, (state, action) => {
        state.subSubCategories.doc.push(action.payload); // Add the new sub-sub-category to the list
        state.subSubCategories.results += 1; // Increment the results count
      })
      // Update sub-sub-category
      .addCase(updateSubSubCategory.fulfilled, (state, action) => {
        const index = state.subSubCategories.doc.findIndex((item) => item._id === action.payload._id);
        if (index !== -1) {
          state.subSubCategories.doc[index] = action.payload; // Update the sub-sub-category
        }
      })
      // Delete sub-sub-category
      .addCase(deleteSubSubCategory.fulfilled, (state, action) => {
        state.subSubCategories.doc = state.subSubCategories.doc.filter((item) => item._id !== action.payload); // Remove the deleted sub-sub-category
        state.subSubCategories.results -= 1; // Decrement the results count
      });
  },
});


// Export selectors for component use
export const selectCategories = (state) => state.category.categories;
export const selectBrands = (state) => state.category.brands;
export const selectColors = (state) => state.category.colors;
export const selectAttributes = (state) => state.category.attributes;
export const selectSubCategories = (state) => state.category.subCategories;
export const selectSubSubCategories = (state) => state.category.subSubCategories;
export default categorySlice.reducer;


