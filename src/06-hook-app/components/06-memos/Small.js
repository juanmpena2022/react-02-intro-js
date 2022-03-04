import { memo } from "react";

export const Small = memo(({ value }) => {
  console.log("small");
  return (
    <>
      <small>{value}</small>
    </>
  );
});
