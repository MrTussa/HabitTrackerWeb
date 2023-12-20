import { createSlice } from "@reduxjs/toolkit";
import { fetchUser } from "./communityActions";

const initialState = {
  user: {},
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
      })
      .addCase(fetchUser.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});
export default communitySlice.reducer;
