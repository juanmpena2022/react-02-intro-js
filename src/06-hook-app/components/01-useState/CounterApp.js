import React, { useState } from "react";
import "./CounterApp.css";

export const CounterApp = () => {
  const [counterState, setCounterState] = useState({
    counter1: 10,
    counter2: 20,
  });
  const { counter1, counter2 } = counterState;

  const btnClick = () => {
    setCounterState({
      ...counterState,
      counter1: counter1 + 1,
    });
  };

  return (
    <>
      <h1>Counter1 {counter1}</h1>
      <h1>Counter2 {counter2}</h1>
      <hr />
      <button className="btn btn-primary" onClick={btnClick}>
        +1
      </button>
    </>
  );
};
