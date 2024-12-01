
import React from "react";
import './../styles/App.css';
import { useDispatch, useSelector } from "react-redux";
import { decreaseCounter, increamentCounter } from "../utils/counterSlice";

const App = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
        <button onClick={() => dispatch(decreaseCounter())}>-</button>
        <span>{counter}</span>
        <button onClick={() => dispatch(increamentCounter())}>+</button>
    </div>
  )
}

export default App
