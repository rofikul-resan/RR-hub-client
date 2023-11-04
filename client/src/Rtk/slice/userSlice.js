import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    updateUser: (state, action) => {
      return (state = action.payload);
    },
    logout: () => {
      return null;
    },
  },
});

export const userReducer = userSlice.reducer;
export const { updateUser, logout } = userSlice.actions;
