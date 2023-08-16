import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./userSlice";
import productSlideReducer from "./productSlice";

// Create the Redux store using the configureStore function
export const store = configureStore({
  // Combine multiple slice reducers using the reducer property
  reducer: {
    // user slice reducer manages user-related state
    user: userSliceReducer,
    // product slice reducer manages product-related state
    product: productSlideReducer
  },
});
