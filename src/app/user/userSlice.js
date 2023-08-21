import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userInfo: {},
};

const userSlice = createSlice({
  name: 'username',
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
  },
});

export const { setUserInfo } = userSlice.actions;

export default userSlice.reducer;
