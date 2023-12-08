import { configureStore } from "@reduxjs/toolkit";
import habitSlice from "./habitSlice";
import authReducer from "./authSlice";
export const store = configureStore({
  reducer: {
    habit: habitSlice,
    auth: authReducer,
  },
});
