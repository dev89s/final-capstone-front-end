import { configureStore } from '@reduxjs/toolkit';
import dataReducer from '../components/Home/createSlice';

const store = configureStore({
  reducer: {
    dataSlice: dataReducer,
  },
});

export default store;
