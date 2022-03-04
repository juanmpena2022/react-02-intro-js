import { useState } from "react";
import "../03-useFetch/effect.css";
import { MultipleCustomHooks } from "../03-useFetch/MultipleCustomHooks";

export const RefExample = () => {
  const [show, setShow] = useState(false);
  const handleShowHide = () => {
    setShow(!show);
  };

  return (
    <>
      <h1>RefExample</h1>
      <hr />

      {show && <MultipleCustomHooks />}

      <button className="btn btn-primary" onClick={handleShowHide}>
        ShowHide
      </button>
    </>
  );
};
