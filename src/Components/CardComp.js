import React, { Fragment } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import './CardComp.css';

const CardComp = (props) => {
  return (
      <div className="cardWrap">
      <Card className="singleCard">
        <Card.Body className="cardBody" style={{ "text-align": "center" }}>
          <Card.Title className="cardTitle">{props.title}</Card.Title>
          <Card.Text className="cardText">
            {props.description}
          </Card.Text>
          <Button variant="primary">Click Here to know more</Button>
        </Card.Body>
      </Card>
      </div>
  );
};

export default CardComp;
