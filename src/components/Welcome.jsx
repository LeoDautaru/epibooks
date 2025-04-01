import React from 'react';
import { Alert, Container } from 'react-bootstrap';

const Welcome = () => (
  <Container className="my-4">
    <Alert variant="info">
      <h1>Benvenuto su EpiBooks!</h1>
      <p>Il tuo negozio di libri di fiducia.</p>
    </Alert>
  </Container>
);

export default Welcome;
