import React from "react";
import "./Content.css";
import Tilt from "react-tilt";

const Content = () => {
  return (
    <>
      <div className="containerCont">
        <div className="contTitle">Our Content</div>
        <hr style={{ height: "4px", width: "60vw" }} />
        <div className="icons">
          <div className="iconContainer">
            <i className="iconFA fas fa-atom"></i>
            <div className="iconText">Career Path</div>
          </div>
          <div className="icon2">
            <i className="iconFA fas fa-edit"></i>
            <div className="iconText">Interview Questions</div>
          </div>
          <div className="icon3">
            <i className="iconFA far fa-building"></i>
            <div className="iconText">Company's Updates</div>
          </div>
        </div>
        <div className="contentBoxContainer">
          <Tilt className="Tilt" options={{ max: 25 }}>
            <div className="Tilt-inner">*insert background image here*</div>
          </Tilt>
          <Tilt className="Tilt" options={{ max: 25 }}>
            <div className="Tilt-inner">*insert background image here*</div>
          </Tilt>
          <Tilt className="Tilt" options={{ max: 25 }}>
            <div className="Tilt-inner">*insert background image here*</div>
          </Tilt>
        </div>
      </div>
    </>
  );
};

export default Content;
