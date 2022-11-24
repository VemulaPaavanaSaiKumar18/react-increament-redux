import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    inceament(state) {
      state.counter++;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    decreament(state) {
      state.counter--;
    },
  },
});

export const counter = counterSlice.actions;

export default counterSlice.reducer;
