import { createSlice } from "@reduxjs/toolkit";

const msgSlice = createSlice({
  name: "message",
  initialState: {},
  reducers: {
    setMessageState: (state, action) => {
      return (state = action.payload);
    },
    sendMsg: (state, action) => {
      state.messages.push(action.payload);
    },
  },
});

export const messageReducer = msgSlice.reducer;
export const { setMessageState, sendMsg } = msgSlice.actions;
