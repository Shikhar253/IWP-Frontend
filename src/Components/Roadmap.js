import React from "react";
import Roadmapcomp from "./Roadmapcomp";
import CardContext from "../context/card-context";
import cardData from "../context/cardData.json";

const Roadmap = () => {
  return (
    <>
      <CardContext.Provider value={cardData}>
        <Roadmapcomp />
      </CardContext.Provider>
    </>
  );
};

export default Roadmap;
