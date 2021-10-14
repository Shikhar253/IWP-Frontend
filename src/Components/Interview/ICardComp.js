import React from "react";
import Card from "react-bootstrap/Card";
import { LinkContainer } from "react-router-bootstrap";
const ICardComp = (props) => {
  return (
    <div >
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.imglink} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          {/* <LinkContainer to="/interview/frontend"> */}
          <Card.Link>
            Link
          </Card.Link>
          {/* </LinkContainer> */}
        </Card.Body>
      </Card>
    </div>
  );
};

export default ICardComp;
