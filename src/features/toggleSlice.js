import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  icon: false,
  message: false,
  chat: false,
  login: false,
};

const toggleSlice = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    setIcon: (state, action) => {
      state.icon = action.payload.icon;
    },
    setMessage: (state, action) => {
      state.message = action.payload.message;
    },
    setChat: (state, action) => {
      state.chat = action.payload.chat;
    },
    setLogin: (state, action) => {
      state.login = action.payload.login;
    },
  },
});

export const { setIcon, setMessage, setChat, setLogin } = toggleSlice.actions;

export const selectIcon = (state) => state.toggle.icon;
export const selectMessage = (state) => state.toggle.message;
export const selectChat = (state) => state.toggle.chat;
export const selectLogin = (state) => state.toggle.login;

export default toggleSlice.reducer;
