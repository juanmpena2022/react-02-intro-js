import React from "react";
import { HeroList } from "../hero/HeroList";

export const MarvelScreen = () => {
  const marvelPublisher = "Marvel Comics";
  
  return (
    <>
      <h1>MarvelScreen</h1>
      <hr />
      <HeroList publisher={marvelPublisher} />
    </>
  );
};
