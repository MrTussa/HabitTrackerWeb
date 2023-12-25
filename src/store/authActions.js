import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// const backendURL = import.meta.env.VITE_BASE_URL;

export const userRegister = createAsyncThunk(
  "auth/register",
  async ({ firstname, lastname, email, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        `/api/user/register`,
        { firstname, lastname, email, password },
        config
      );
      localStorage.setItem("userToken", data.token);
      return data;
    } catch (error) {
      if (error.response && error.response.data.error) {
        return rejectWithValue(error.response.data.error);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const userLogin = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        `/api/user/login`,
        { email, password },
        config
      );
      localStorage.setItem("userToken", data.token);
      return data;
    } catch (error) {
      if (error.response && error.response.data.error) {
        return rejectWithValue(error.response.data.error);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
