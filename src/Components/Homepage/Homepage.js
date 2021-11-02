import React, { Fragment } from "react";
import "./Homepage.css";
import Content from "./Content";
import Faq from "./Faq";
import Services from "./Services";
import TopCompo from "./TopCompo";
const Homepage = () => {
  return (
    <Fragment>
      <div className="homepageWrap">
        <TopCompo />
        <Services />
        <Content />
        <Faq />
      </div>
    </Fragment>
  );
};

export default Homepage;
