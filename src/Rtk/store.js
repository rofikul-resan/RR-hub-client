import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./slice/userSlice";
import { messageReducer } from "./slice/messageSlice";
import { messageApi } from "./query/messageApi";
import { userApi } from "./query/userApi";
// import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    user: userReducer,
    message: messageReducer,
    [messageApi.reducerPath]: messageApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(messageApi.middleware)
      .concat(userApi.middleware),
});
