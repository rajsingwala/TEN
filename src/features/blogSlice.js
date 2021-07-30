import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  blog: [],
};

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    setBlog: (state, action) => {
      state.blog = action.payload.blog;
    },
  },
});

export const { setBlog } = blogSlice.actions;

export const selectBlog = (state) => state.blog.blog;

export default blogSlice.reducer;
