import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useCounter } from "../../../hooks/06-hook-app/useCounter";
import { useFetch } from "../../../hooks/06-hook-app/useFetch";
import "./effect.css";

export const Layout = () => {
  const { value: counter, increment } = useCounter(1);
  const pRef = useRef();
  const [boxSize, setBoxSize] = useState({});
  const [boxSizeLayout, setBoxSizeLayout] = useState({});

  const url = `https://www.breakingbadapi.com/api/quotes/${counter}`;
  const { data } = useFetch(url);
  const { quote } = data !== null && data[0];

  useEffect(() => {
    setBoxSize(pRef.current.getBoundingClientRect());
  }, [quote]);
  useLayoutEffect(() => {
    setBoxSizeLayout(pRef.current.getBoundingClientRect());
  }, [quote]);

  return (
    <>
      <h1>LayoutEffect</h1>
      <hr />
      <blockquote className="blockquote text-right">
        <p ref={pRef} className="mb-0">
          {quote}
        </p>
      </blockquote>

      <pre>{JSON.stringify(boxSize, null, 3)}</pre>
      <pre>{JSON.stringify(boxSizeLayout, null, 3)}</pre>

      <button className="btn btn-primary" onClick={increment}>
        Siguiente
      </button>
    </>
  );
};
