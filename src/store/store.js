import { configureStore } from "@reduxjs/toolkit";
import countReduser from "./counter";
import todoReduser from "./todo";
import contactReduser from "./contact";

export const store = configureStore({
  reducer: {
    counter: countReduser,
    todo: todoReduser,
    contact: contactReduser,
  },
});

// export const store = configureStore({
//   reducer: counterSlice.reducer,
// });

// export const counterActions = counterSlice.actions;
