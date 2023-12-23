import { createSlice } from "@reduxjs/toolkit";
import { fetchUser, searchUsers } from "./communityActions";

const initialState = {
  user: {},
  users: [],
  friends: [],
  posts: [],
  loading: false,
  error: null,
};

export const communitySlice = createSlice({
  name: "community",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
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
      .addCase(searchUsers.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.users = payload;
      });
  },
});
export default communitySlice.reducer;
