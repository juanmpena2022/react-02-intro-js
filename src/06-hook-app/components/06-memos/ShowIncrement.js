import PropTypes from "prop-types";
import { memo } from "react";

export const ShowIncrement = memo(({ increment }) => {
  console.log("me volvi a generar");
  return (
    <button className="btn btn-primary" onClick={() => increment(5)}>
      Increment
    </button>
  );
});

ShowIncrement.propTypes = {
  increment: PropTypes.func.isRequired,
};
