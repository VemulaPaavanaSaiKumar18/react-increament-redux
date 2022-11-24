import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { counter } from "../store/counter";

const Increament = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.counter);

  const incrementHanduler = () => {
    dispatch(counter.inceament());
  };

  const increaseHanduler = () => {
    dispatch(counter.increase(5));
  };
  const decreamentHanduler = () => {
    dispatch(counter.decreament());
  };
  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={incrementHanduler}>Increament</button>
        <button onClick={increaseHanduler}>Increamentby 5</button>
        <button onClick={decreamentHanduler}>decreament</button>
      </div>
    </div>
  );
};

export default Increament;
