import React from "react";
import { HeroList } from "../hero/HeroList";

export const DcScreen = () => {
  const marvelPublisher = "DC Comics";
  
  return (
    <>
      <h1>DcScreen</h1>
      <hr />
      <HeroList publisher={marvelPublisher} />
    </>
  );
};
