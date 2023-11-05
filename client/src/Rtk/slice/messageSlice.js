import { createSlice } from "@reduxjs/toolkit";

const msgSlice = createSlice({
  name: "message",
  initialState: null,
  reducers: {
    setMessageState: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const messageReducer = msgSlice.reducer;
export const { setMessageState } = msgSlice.actions;
