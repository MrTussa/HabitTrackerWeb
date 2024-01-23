import { createSlice } from "@reduxjs/toolkit";
import {
  fetchHabits,
  addHabit,
  fetchMonthHabits,
  fetchWeekCompletion,
} from "./habitActions";

const initialState = {
  startData: null,
  habits: [],
  habitCompletion: [],
  weekCompletion: [],
  loading: false,
  weekCompletionLoading: false,
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
      .addCase(fetchMonthHabits.fulfilled, (state, { payload }) => {
        state.habitCompletion = payload;
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
      })
      .addCase(fetchWeekCompletion.pending, (state) => {
        state.weekCompletionLoading = true;
        state.error = null;
      })
      .addCase(fetchWeekCompletion.fulfilled, (state, { payload }) => {
        state.weekCompletion = payload;
        state.weekCompletionLoading = false;
        state.error = null;
      })
      .addCase(fetchWeekCompletion.rejected, (state, { payload }) => {
        state.weekCompletionLoading = false;
        state.error = payload;
      });
  },
});
export const { deleteHabitHandler } = habitSlice.actions;
export default habitSlice.reducer;
