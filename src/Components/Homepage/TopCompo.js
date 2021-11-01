import React, { Fragment } from "react";
import "./TopCompo.css";

const TopCompo = () => {
  return (
    <Fragment>
      <div className="topHPart">
        <div className="topLeftPart">
          <div className="titleText">Educatverse</div>
          <hr />
          <div className="paragraph">
            <div className="topPara">
              One stop destination to unmantle your doubts and help you prepare
              for your future !
              <br />
              A wholesome hub to provide you a plethora of options for a
              successful technology-driven career.
              <br />
            </div>
            <div className="lowPara">
              <ul>
                <li className="listItem">
                  Don't know how to proceed? We'll provide you roadmaps to help
                  take informed decisions for your preferred domain.
                </li>
                <li className="listItem">
                  Low Self-Esteem? Not sure about Interviews? Head over to our
                  practice interviews site and assess your soft skills.
                </li>
                <li className="listItem">
                  No single platform to notify you for your job/internship
                  opportunities? Never miss an update about any career
                  opportunity in our job updates site for top-notch companies.
                </li>
              </ul>
            </div>
            <button className="learnMore">Learn More</button>
          </div>
        </div>

        <div className="topRightPart">
          *have to put animated background here in this area*
        </div>
      </div>
    </Fragment>
  );
};

export default TopCompo;
