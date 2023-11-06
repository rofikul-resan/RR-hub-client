import { createSlice } from "@reduxjs/toolkit";

const msgSlice = createSlice({
  name: "message",
  initialState: {},
  reducers: {
    setMessageState: (state, action) => {
      const msgState = action.payload;
      return (state = msgState);
    },
    sendMsg: (state, action) => {
      state.messages.push(action.payload);
    },
  },
});

export const messageReducer = msgSlice.reducer;
export const { setMessageState, sendMsg } = msgSlice.actions;
