import React from 'react';
import { Container, Nav, Navbar, Alert, Card, Row, Col } from "react-bootstrap";

const Welcome = () => (
  <Container className="mt-4 text-center">
    <Alert variant="primary">
      <h1>Welcome to EpiBooks!</h1>
      <p>Find your next great read here.</p>
    </Alert>
    <Alert variant='danger'>
          <h2>Limited Stock!</h2>
        </Alert>
  </Container>
);

export default Welcome;
