import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    updateUser: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const userReducer = userSlice.reducer;
export const { updateUser } = userSlice.actions;
