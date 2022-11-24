import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { todo } from "../store/todo";
let count = 0;
const Addtodo = () => {
  const [tododata, settododata] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todoList);
  const addHanduler = (event) => {
    event.preventDefault();
    let data = {
      id: count++,
      item: tododata,
    };
    dispatch(todo.saveTodo(data));
  };
  return (
    <div>
      <input
        type="text"
        value={tododata}
        onChange={(event) => settododata(event.target.value)}
      />
      <button onClick={addHanduler}>ADD</button>
      {todos.map((item) => (
        <p>{item.item}</p>
      ))}
    </div>
  );
};

export default Addtodo;
