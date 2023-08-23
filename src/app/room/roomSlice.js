import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import fetchRoomsApi from './fetchRoomsApi';
import fetchDeleteRoomApi from './fetchDeleteRoomApi';

export const fetchRooms = createAsyncThunk(
  'rooms/fetchRooms',
  async () => {
    const rooms = await fetchRoomsApi();
    return rooms;
  },
);

export const fetchDeleteRoom = createAsyncThunk(
  'rooms/deleteRooms',
  async (id) => {
    const msg = await fetchDeleteRoomApi(id);
    return msg;
  },
);

const initialState = {
  roomList: [],
  isLoading: false,
  error: undefined,
};

const userSlice = createSlice({
  name: 'roomsInfo',
  initialState,
  extraReducers: (build) => {
    build.addCase(fetchRooms.pending, (state) => {
      state.isLoading = true;
    });
    build.addCase(fetchRooms.fulfilled, (state, action) => {
      state.isLoading = false;
      state.roomList = action.payload;
    });
    build.addCase(fetchRooms.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      console.error(action.payload);
    });
    build.addCase(fetchDeleteRoom.pending, (state) => {
      state.isLoading = true;
    });
    build.addCase(fetchDeleteRoom.fulfilled, (state, action) => {
      state.isLoading = false;
      if ('message' in action.payload && action.payload.message === 'room not found') {
        state.roomList = action.payload.room_list;
      } else {
        state.roomList = state.roomList.filter((room) => room.id !== action.payload.id);
      }
      state.message = action.payload;
    });
    build.addCase(fetchDeleteRoom.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      console.error(action.payload);
    });
  },
});

export default userSlice.reducer;
