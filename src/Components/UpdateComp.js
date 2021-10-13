import React, { useContext } from "react";
import UpdCardComp from "./UpdCardComp";
import UpdContext from "../context/upd-context";

const UpdateComp = () => {
  const ctx = useContext(UpdContext);
  return (
    <>
      <div className="updContainer" style={{display:"flex", flexWrap:"wrap"}} >
        {ctx.map((data) => {
          return <UpdCardComp imglink= {data.imglink} title={data.title} desc={data.desc} />;
        })}
      </div>
    </>
  );
};

export default UpdateComp;
