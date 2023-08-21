import { configureStore } from '@reduxjs/toolkit';

import dataReducer from '../components/Home/createSlice';
import userReducer from './user/userSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    dataSlice: dataReducer,
  },
});

export default store;
