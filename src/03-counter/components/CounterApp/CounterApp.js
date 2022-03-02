import PropTypes from "prop-types";
import { useState } from "react";

const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(value);

  //#region Funciones
  const fnAdd = (e) => {
    setCounter(counter + 1);
  };
  const fnReset = (e) => {
    setCounter(value);
  };
  const fnSubtract = (e) => {
    setCounter(counter - 1);
  };
  //#endregion

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>
      <button onClick={fnAdd}>+1</button>
      <button onClick={fnReset}>Reset</button>
      <button onClick={fnSubtract}>-1</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number,
};

CounterApp.defaultProps = {
  value: 10
};

export default CounterApp;
