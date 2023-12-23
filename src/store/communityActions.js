import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const backendURL = import.meta.env.VITE_BASE_URL;

export const fetchUser = createAsyncThunk(
  "community/fetchUser",
  async (_, { rejectWithValue, getState }) => {
    try {
      const userToken = getState().auth.userToken;
      const config = {
        headers: {
          Authorization: userToken,
        },
      };

      const response = await axios.get(`${backendURL}/api/user/info`, config);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const searchUsers = createAsyncThunk(
  "community/searchUsers",
  async (searchQuery, { rejectWithValue, getState }) => {
    try {
      const userToken = getState().auth.userToken;
      const config = {
        headers: {
          Authorization: userToken,
        },
      };

      const response = await axios.get(
        `${backendURL}/api/community/search-users`,
        {
          params: { searchQuery },
          ...config,
        }
      );

      return response.data.users;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const sendFriendRequest = createAsyncThunk(
  "community/sendFriendRequest",
  async (friendId, { rejectWithValue, getState }) => {
    try {
      const userToken = getState().auth.userToken;
      const config = {
        headers: {
          Authorization: userToken,
        },
      };

      const response = await axios.post(
        `${backendURL}/api/community/req-friend`,
        { friendId },
        config
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchNotifications = createAsyncThunk(
  "community/fetchNotifications",
  async (_, { rejectWithValue, getState }) => {
    try {
      const userToken = getState().auth.userToken;
      const config = {
        headers: {
          Authorization: userToken,
        },
      };

      const response = await axios.get(
        `${backendURL}/api/community/notifications`,
        config
      );

      return response.data.mergedNotif;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
