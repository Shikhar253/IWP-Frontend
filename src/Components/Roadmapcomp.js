import React, { useContext } from "react";
import "./Roadmapcomp.css";
import roadmap from "../Images/roadmap1.png";
import CardComp from "./CardComp";
import CardContext from "../context/card-context";

const Roadmap = () => {
  const ctx = useContext(CardContext);
  return (
    <>
      <div className="topPart">
        <div className="textPart">
          <div className="titlePart">Roadmap to build your Career</div>
          <div className="para">
            To help you create a useful strategic framework so that you can
            effectively organize and prioritize your ideas i.e roadmaps for top
            domains in IT industry.
          </div>
        </div>
        <div className="imgPart">
          <img src={roadmap} />
        </div>
      </div>

      <div className="cardContainer">
        {ctx.map((data) => {
          return <CardComp title={data.title} description={data.description} />;
        })}
      </div>
    </>
  );
};

export default Roadmap;
