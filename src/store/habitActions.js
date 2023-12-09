import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const backendURL = import.meta.env.VITE_BASE_URL;

// Действие для получения всех привычек пользователя
export const fetchHabits = createAsyncThunk(
  "habit/fetchHabits",
  async (_, { rejectWithValue, getState }) => {
    try {
      const userToken = getState().auth.userToken;
      const config = {
        headers: {
          Authorization: userToken,
        },
      };
      const response = await axios.get(`${backendURL}/api/habits/`, config);
      return response.data.habits;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Действие для добавления новой привычки
export const addHabit = createAsyncThunk(
  "habit/addHabit",
  async ({ habitName, day, reminder }, { rejectWithValue, getState }) => {
    try {
      const userToken = getState().auth.userToken;
      const config = {
        Authorization: userToken,
        headers: {
          "Content-Type": "application/json",
        },
      };
      const body = {
        habitName,
        day,
        reminder,
      };
      const response = await axios.post(
        `${backendURL}/api/habits/add`,
        body,
        config
      );
      return response.data.habit;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const deleteHabit = createAsyncThunk(
  "habit/deleteHabit",
  async ({ habitId }, { rejectWithValue, getState }) => {
    try {
      const userToken = getState().auth.userToken;
      console.log(habitId);
      const config = {
        headers: {
          Authorization: userToken,
        },
      };
      const response = await axios.delete(
        `${backendURL}/api/habits/delete/${habitId}`, // Включаем habitId в URL
        config
      );
      return response.data.habit;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
