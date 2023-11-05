import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./slice/userSlice";
import { messageReducer } from "./slice/messageSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    message: messageReducer,
  },
});
