import { configureStore } from '@reduxjs/toolkit';

import dataReducer from '../components/Home/createSlice';
import userReducer from './user/userSlice';
import roomReducer from './room/roomSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    dataSlice: dataReducer,
    room: roomReducer,
  },
});

export default store;
