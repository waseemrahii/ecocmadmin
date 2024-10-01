import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import productReducer from './product/productSlice';
import orderReducer from './orderSlice';
import categoryReducer from './categorybrandSlice';
import refundReducer from './refundSlice';
import vendorReducer from './vendorSlice'; 
import brandReducer from './brandSlice'; 
import productCategorySlice from './categorySlice'; 
import productSubcategoryReducer from './subCategorySlice'; 
import bannerReducer from './bannerSlice'; // Import the banner reducer
import dealOfTheDayReducer from './DealOfDaySlice'; // Import the banner reducer
import FeatureDealReducer from './FeatureDealSlice'; // Import the banner reducer

const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
    vendorOrder: orderReducer,
    category: categoryReducer,
    refund: refundReducer,
    vendor: vendorReducer,
    brand: brandReducer,
    productCategory: productCategorySlice,
    productSubcategory: productSubcategoryReducer,
    banner: bannerReducer,
    dealOfTheDay: dealOfTheDayReducer,
    featureDeal: FeatureDealReducer,

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serializable state invariant middleware
    }),
});

export default store;
