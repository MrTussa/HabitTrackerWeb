import { createSlice } from "@reduxjs/toolkit";
import { fetchHabits, addHabit, fetchMonthHabits } from "./habitActions";

const initialState = {
  startData: null,
  habits: [],
  habitCompletion: [],
  loading: false,
  error: null,
};

export const habitSlice = createSlice({
  name: "habit",
  initialState,
  reducers: {
    deleteHabitHandler: (state, { payload }) => {
      const habitId = payload.habitId;
      state.habits = state.habits.filter((habit) => habit._id !== habitId);
    },
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
      .addCase(fetchMonthHabits.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMonthHabits.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.habitCompletion = payload;
      })
      .addCase(fetchMonthHabits.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(addHabit.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addHabit.fulfilled, (state, { payload }) => {
        state.loading = false;
        const currDay = new Date().getDay();
        if (payload.day.includes(currDay) || payload.day[0] === -1) {
          state.habits.push(payload);
        }
      })
      .addCase(addHabit.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});
export const { deleteHabitHandler } = habitSlice.actions;
export default habitSlice.reducer;
