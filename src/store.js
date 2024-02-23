// store/index.js
import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import cartReducer from './redux/cartSlice'

const store = configureStore({
  reducer: {cart: cartReducer},
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Ignore check for non-serializable values (e.g., functions)
    }),
});

export default store;