import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_URL } from '../../config/info';

const initialState = {
  cities: [],
  loadingCities: false,
  errorCities: undefined,
};

const URL = `${API_URL}/api/v1/cities`;

export const getCities = createAsyncThunk('cities/get', async () => {
  const cities = await axios.get(URL);
  return cities.data;
});

const citySlice = createSlice({
  name: 'city',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCities.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getCities.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.cities = payload;
    });
    builder.addCase(getCities.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default citySlice.reducer;
