import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [],
};

const todoslice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    saveTodo(state, action) {
      state.todoList.push(action.payload);
    },
  },
});

export const todo = todoslice.actions;

export default todoslice.reducer;
