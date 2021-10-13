import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const header = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Navbar.Brand>IWP-PROJECT</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/interview">
            <Nav.Link>Interview</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/roadmap">
            <Nav.Link>Roadmap</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/updates">
            <Nav.Link>Updates</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default header;
