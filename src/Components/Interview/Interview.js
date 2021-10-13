import React from "react";
import IContext from "../../context/i-context";
import iCard from "../../context/iCard.json";
import IComp from "./IComp.js";

const Interview = () => {
  return (
    <>
      <IContext.Provider value={iCard}>
        <IComp />
      </IContext.Provider>
    </>
  );
};

export default Interview;
