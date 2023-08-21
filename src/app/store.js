import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './dataSlice'; // Update the path to your dataSlice

const store = configureStore({
  reducer: {
    dataSlice: dataReducer,
  },
});

export default store;
