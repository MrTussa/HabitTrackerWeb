import { createSlice } from "@reduxjs/toolkit";
import { fetchHabits, addHabit } from "./habitActions";

const initialState = {
  startData: null,
  habits: [],
  loading: false,
  error: null,
};

export const habit = createSlice({
  name: "habit",
  initialState,
  reducers: {
    // Добавьте необходимые редукторы здесь, если есть
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchHabits.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchHabits.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.habits = payload;
      })
      .addCase(fetchHabits.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(addHabit.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addHabit.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.habits.push(payload);
      })
      .addCase(addHabit.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export default habit.reducer;
