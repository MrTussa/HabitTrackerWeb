import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import moment from "moment";
const backendURL = process.env.API_URL
  ? process.env.API_URL
  : import.meta.env.VITE_BASE_URL;

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

      const formattedDay = moment().format("YYYY-MM-DD");

      const response = await axios.get(
        `${backendURL}/api/habits/?day=${formattedDay}`,
        config
      );

      return response.data.habits;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const markCompleted = createAsyncThunk(
  "habit/markCompleted",
  async ({ habitId, day }, { rejectWithValue, getState }) => {
    try {
      const userToken = getState().auth.userToken;
      const config = {
        headers: {
          Authorization: userToken,
          "Content-Type": "application/json",
        },
      };

      const body = {
        habitId,
        date: getCurrentDateISOString(),
        day: day,
      };

      const response = await axios.patch(
        `${backendURL}/api/habits/mark-completed`,
        body,
        config
      );

      return response.data;
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
        headers: {
          Authorization: userToken,
          "Content-Type": "application/json",
        },
      };
      const body = {
        habitName,
        day: day,
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

export const fetchMonthHabits = createAsyncThunk(
  "habit/fetchMonthHabits",
  async (_, { rejectWithValue, getState }) => {
    try {
      const userToken = getState().auth.userToken;
      const config = {
        headers: {
          Authorization: userToken,
        },
      };

      const currentDate = new Date();
      const year = currentDate.getFullYear();
      const month = String(currentDate.getMonth() + 1).padStart(2, "0");

      const response = await axios.get(
        `${backendURL}/api/habits/month?year=${year}&month=${month}`,
        config
      );

      return response.data.habits;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

function getCurrentDateISOString() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate()).padStart(2, "0");
  const isoString = `${year}-${month}-${day}`;
  return isoString;
}
