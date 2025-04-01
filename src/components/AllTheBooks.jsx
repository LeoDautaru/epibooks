import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import books from '../data/fantasy.json'; 
const AllTheBooks = () => (
  <Container>
    <Row className="g-4">
      {books.map((book) => (
        <Col key={book.asin} sm={6} md={4} lg={3}>
          <Card>
            <Card.Img variant="top" src={book.img} alt={book.title} />
            <Card.Body>
              <Card.Title>{book.title}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
);

export default AllTheBooks;