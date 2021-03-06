import React from "react";
import Card from "react-bootstrap/Card";
import { LinkContainer } from "react-router-bootstrap";
const UpdCardComp = (props) => {
  return (
    <div className="cardWrap">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.imglink} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.desc}</Card.Text>
          
          <Card.Link href="https://www.apple.com/careers/us/">Link</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default UpdCardComp;
