import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

export const alertDeleteUserModalSlice = createSlice({
  name: "alertDeleteUserModalSlice",
  initialState,
  reducers: {
    open: (state) => {
      state.isOpen = true;
    },
    close: (state) => {
      state.isOpen = false;
    },
  },
});

export const { close, open } = alertDeleteUserModalSlice.actions;

export default alertDeleteUserModalSlice.reducer;
