import { useCounter } from "../../../hooks/06-hook-app/useCounter";
import "./CounterApp.css";

export const CounterWithCustomHook = () => {
  const { value, increment, decrement, reset } = useCounter(14);

  return (
    <>
      <h1>CounterWithCustomHook: {value}</h1>
      <hr />
      <button className="btn" onClick={() => increment(2)}>
        +1
      </button>
      <button className="btn" onClick={reset}>
        reset
      </button>
      <button className="btn" onClick={() => decrement(2)}>
        -1
      </button>
    </>
  );
};
