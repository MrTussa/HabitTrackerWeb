import { configureStore } from "@reduxjs/toolkit";
import habitSlice from "./habitSlice";
import authReducer from "./authSlice";
import communityReducer from "./communitySlice";
export const store = configureStore({
  reducer: {
    habit: habitSlice,
    auth: authReducer,
    community: communityReducer,
  },
});
