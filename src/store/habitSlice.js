import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  startData: null,
  userCart: [],
  loading: false,
  error: null,
};
export const habit = createSlice({
  name: "habit",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      state.userCart = [...state.userCart, payload];
    },
    clearCart: (state) => {
      state.userCart = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, clearCart } = habit.actions;

export default habit.reducer;
