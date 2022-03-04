import { useRef } from "react";
import "../03-useFetch/effect.css";

export const FocusScreen = () => {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.select();
  };

  return (
    <>
      <h1>FocusScreen</h1>
      <hr />

      <input ref={inputRef} className="form-control" placeholder="name" />

      <button className="btn btn-primary mt-5" onClick={handleClick}>
        Focus
      </button>
    </>
  );
};
