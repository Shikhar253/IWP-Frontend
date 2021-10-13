import React, { useContext } from "react";
import ICardComp from "./ICardComp";
import IContext from "../../context/i-context";

const IComp = () => {
  const ctx = useContext(IContext);
  return (
    <>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {ctx.map((data) => {
          return <ICardComp imglink={data.imglink} title={data.title} />;
        })}
      </div>
    </>
  );
};

export default IComp;
