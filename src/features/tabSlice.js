import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: "1",
};

const tabSlice = createSlice({
  name: "tab",
  initialState,
  reducers: {
    setTab: (state, action) => {
      state.open = action.payload.open;
    },
  },
});

export const { setTab } = tabSlice.actions;

export const selectTab = (state) => state.tab.open;

export default tabSlice.reducer;
