import { useMemo, useState } from "react";
import { procesoPesado } from "../../../helpers/06-hook-app/procesoPesado";
import { useCounter } from "../../../hooks/06-hook-app/useCounter";
import "../03-useFetch/effect.css";

export const MemoHook = () => {
  const { value, increment } = useCounter(5000);
  const [show, setShow] = useState(true);

  const procesoPesadoMemo = useMemo(() => procesoPesado(value), [value]);

  const btnShow = () => {
    setShow(!show);
  };

  return (
    <>
      <h1>
        MemoHook: <small>{value}</small>
      </h1>
      <hr />
      <p>{procesoPesadoMemo}</p>

      <button className="btn btn-primary" onClick={increment}>
        +1
      </button>
      <button className="btn btn-primary ml-3" onClick={btnShow}>
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  );
};
