import { createSlice } from "@reduxjs/toolkit";
import {
  fetchUser,
  searchUsers,
  fetchNotifications,
  fetchPosts,
  createPost,
  fetchLeaderboard,
} from "./communityActions";

const initialState = {
  user: {},
  users: [],
  friends: [],
  posts: [],
  notifications: [],
  leaderboard: [],
  loading: false,
  searchLoading: false,
  error: null,
};

export const communitySlice = createSlice({
  name: "community",
  initialState,
  reducers: {
    addFriendHandler: (state, { payload }) => {
      state.notifications[0].message.userDetails.userId !== payload.userId;
      state.notifications = state.notifications.filter(
        (notif) => notif.message.userDetails.userId !== payload.userId
      );
      state.friends.push(payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.friends = [];
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUser.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.user = payload;
        state.friends = payload.friends;
      })
      .addCase(fetchUser.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(searchUsers.pending, (state) => {
        state.users = [];
        state.searchLoading = true;
      })
      .addCase(searchUsers.fulfilled, (state, { payload }) => {
        state.users = payload;
        state.searchLoading = false;
      })
      .addCase(fetchNotifications.fulfilled, (state, { payload }) => {
        state.notifications = payload;
      })
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
        state.posts = [];
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.posts = payload;
      })
      .addCase(fetchPosts.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(createPost.fulfilled, (state, { payload }) => {
        state.posts.unshift(payload); // Добавляем новый пост в начало списка
      })
      .addCase(fetchLeaderboard.fulfilled, (state, { payload }) => {
        state.leaderboard = payload;
      });
  },
});

export const { addFriendHandler } = communitySlice.actions;

export default communitySlice.reducer;
