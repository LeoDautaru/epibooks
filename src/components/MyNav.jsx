import React from "react";
import { Container, Nav, Navbar, Alert, Card, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const MyNav = () => (
  <Navbar bg="dark" variant="dark" expand="lg" className="sticky-top">
    <Container>
      <Navbar.Brand href="#">EpiBooks</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">About</Nav.Link>
          <Nav.Link href="#">Browse</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default MyNav;
