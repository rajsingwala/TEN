import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import toggleReducer from "../features/toggleSlice";
import cartReducer from "../features/cartSlice";
import blogReducer from "../features/blogSlice";
import tabReducer from "../features/tabSlice";

export default configureStore({
  reducer: {
    toggle: toggleReducer,
    cart: cartReducer,
    blog: blogReducer,
    tab: tabReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
