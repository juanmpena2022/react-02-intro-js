import React, { useCallback, useState } from "react";
import { useCounter } from "../../../hooks/06-hook-app/useCounter";
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {
  const [value, setValue] = useState(10);
  const incrementCallback = useCallback(
    (num) => {
      setValue((v) => v + num);
    },
    [setValue]
  );

  return (
    <>
      <h1>CallbackHook: {value}</h1>
      <hr />

      <ShowIncrement increment={incrementCallback} />
    </>
  );
};
