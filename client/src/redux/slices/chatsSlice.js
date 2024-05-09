import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as API from '../../api';
const initialState = {
  allChats: null,
  activeChat: null,
  isLoading: false,
  error: null,
};

const SLICE_NAME = 'chats';

const getChats = createAsyncThunk(
  `${SLICE_NAME}/getAllChats`,
  async function (userId, thunkAPI) {
    try {
      const {
        data: {
          data,
        },
      } = await API.getChats(userId);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.error.message);
    }
  }
);

const getActiveChat = createAsyncThunk(
  `${SLICE_NAME}/getActiveChat`,
  async function (chatId, thunkAPI) {
    try {
      const {
        data: {
          data
        },
      } = await API.getChat(chatId);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.error.message);
    }
  }
);

const chatsSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getChats.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getActiveChat.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });

    builder.addCase(getChats.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(getActiveChat.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    builder.addCase(getChats.fulfilled, (state, action) => {
      state.isLoading = false;
      console.log(action);
      state.allChats = action.payload;
    });
    builder.addCase(getActiveChat.fulfilled, (state, action) => {
      state.isLoading = false;
      state.activeChat = action.payload;
    });
  },
});

const { reducer: chatsReducer } = chatsSlice;
export { getChats, getActiveChat };
export default chatsReducer;
