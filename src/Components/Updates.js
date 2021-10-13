import React from "react";
import UpdContext from "../context/upd-context";
import updCard from "../context/updCard.json";
import UpdateComp from "./UpdateComp";
const Updates = () => {
  return (
    <>
      <UpdContext.Provider value={updCard}>
        <UpdateComp />
      </UpdContext.Provider>
    </>
  );
};

export default Updates;
