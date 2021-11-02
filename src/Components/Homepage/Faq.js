import React, { Fragment } from "react";
import "./Faq.css";

const Faq = () => {
  return (
    <Fragment className="fragment">
      <div className="faqTitle" id="faq">
        FAQ
      </div>
      <section>
        <div className="container">
          <div className="accordion">
            <div className="accordion-item" id="question1">
              <a className="accordion-link" href="#question1">
                Are all the services on EducatVerse free?
                <i className="icon fas fa-arrow-down"></i>
                <i className="icon fas fa-arrow-up"></i>
              </a>
              <div className="answer">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempora consequuntur quisquam quas in aperiam saepe eos
                  asperiores earum pariatur laboriosam voluptatum, ratione
                  laborum doloribus placeat nemo obcaecati hic veritatis minus!
                </p>
              </div>
            </div>
          </div>
          <div className="accordion">
            <div className="accordion-item" id="question2">
              <a className="accordion-link" href="#question2">
                What are the upcoming features?
                <i className="icon fas fa-arrow-down"></i>
                <i className="icon fas fa-arrow-up"></i>
              </a>
              <div className="answer">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae, placeat! Perferendis, nostrum repellat error assumenda
                  tempore unde hic, repudiandae, nisi amet quod ex sed
                  asperiores aliquid facilis sequi tempora doloribus.
                </p>
              </div>
            </div>
          </div>
          <div className="accordion">
            <div className="accordion-item" id="question3">
              <a className="accordion-link" href="#question3">
                How to start practicing for interviews?
                <i className="icon fas fa-arrow-down"></i>
                <i className="icon fas fa-arrow-up"></i>
              </a>
              <div className="answer">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic,
                  possimus ex animi fugiat facere nesciunt error quis aspernatur
                  veniam obcaecati voluptatem ut, dolore at repellendus tempore
                  rem odit qui cupiditate?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Faq;
