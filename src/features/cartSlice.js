import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: JSON.parse(window.localStorage.getItem("mycart")),
  drawer: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, action) => {
      state.cart = action.payload.cart;
    },
    setDrawer: (state, action) => {
      state.drawer = action.payload.drawer;
    },
  },
});

export const { setCart, setDrawer } = cartSlice.actions;

export const selectCart = (state) => state.cart.cart;
export const selectDrawer = (state) => state.cart.drawer;

export default cartSlice.reducer;
