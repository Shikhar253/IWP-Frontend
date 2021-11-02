import React from "react";
import "./Services.css";
import Card from "react-bootstrap/Card";

const Services = () => {
  return (
    <div className="servContainer">
      <div className="servTitle">Our Services</div>
      <hr style={{ height: "4px", width: "80vw" }} />
      <div className="cardContainer">
        <Card className="mainCard" style={{ width: "18rem" }}>
          <Card.Body className="cardBody">
            <div className="cardTitleIcon">
              <Card.Title>
              <i className="fontIcon fas fa-road"></i>
              </Card.Title>
            </div>
            <Card.Subtitle className="mb-2 text-muted">Roadmaps</Card.Subtitle>
            <Card.Text>
              To help you create a useful strategic framework so that you can
              effectively organize and prioritize your ideas i.e roadmaps for
              top domains in IT.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="mainCard" style={{ width: "18rem" }}>
          <Card.Body className="cardBody">
            <div className="cardTitleIcon">
              <Card.Title>
                <i className="fontIcon fas fa-users"></i>
              </Card.Title>
            </div>
            <Card.Subtitle className="mb-2 text-muted">
              Practice Interviews
            </Card.Subtitle>
            <Card.Text>
              To help you provide a platform to improve your speaking and
              analyse your clarity and specificity for top interview questions.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="mainCard" style={{ width: "18rem" }}>
          <Card.Body className="cardBody">
            <div className="cardTitleIcon">
              <Card.Title>
              <i className="fontIcon fas fa-building"></i>
              </Card.Title>
            </div>
            <Card.Subtitle className="mb-2 text-muted">
              Job/Interview Updates
            </Card.Subtitle>
            <Card.Text>
              To provide you top company's at one place. No need to browse hundreds of sites. This would list all that you need.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Services;
