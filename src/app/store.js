import { configureStore } from '@reduxjs/toolkit';
import dataReducer from '../components/Home/reducer';

const store = configureStore({
  reducer: {
    data: dataReducer
  },
});

export default store;
