import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';
import themeReducer from './slices/themeSlice';
import userReducer from './slices/userSlice';
import chatsReducer from './slices/chatsSlice';


// переробити стор у проекті на тулкіт

const store = configureStore({
  reducer: {
    counter: counterReducer,
    theme: themeReducer,
    user: userReducer,
    chats: chatsReducer
  }
});

export default store;
