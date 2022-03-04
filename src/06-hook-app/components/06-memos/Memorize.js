import { useState } from "react";
import { useCounter } from "../../../hooks/06-hook-app/useCounter";
import "../03-useFetch/effect.css";
import { Small } from "./Small";

export const Memorize = () => {
  const { value, increment } = useCounter(10);
  const [show, setShow] = useState(true);

  const btnShow = () => {
    setShow(!show);
  };

  return (
    <>
      <h1>
        Counter: <Small value={value} />
      </h1>
      <hr />

      <button className="btn btn-primary" onClick={increment}>
        +1
      </button>
      <button className="btn btn-primary ml-3" onClick={btnShow}>
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  );
};
