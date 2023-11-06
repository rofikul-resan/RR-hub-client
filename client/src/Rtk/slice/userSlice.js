import { createSlice } from "@reduxjs/toolkit";
import { clearToken } from "../../utils";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    updateUser: (state, action) => {
      return (state = action.payload);
    },
    logout: () => {
      clearToken();
      return null;
    },
    setActive: (state, action) => {
      return (state.isActive = action.payload.isActive);
    },
  },
});

export const userReducer = userSlice.reducer;
export const { updateUser, logout, setActive } = userSlice.actions;
