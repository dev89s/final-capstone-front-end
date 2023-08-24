import { configureStore } from '@reduxjs/toolkit';

import dataReducer from '../components/Home/createSlice';
import userReducer from './user/userSlice';
import roomReducer from './room/roomSlice';
import CityReducer from './city/citySlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    dataSlice: dataReducer,
    room: roomReducer,
    cities: CityReducer,
  },
});

export default store;
