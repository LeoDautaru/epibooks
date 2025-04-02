import React from "react";
import { Card, Col } from "react-bootstrap";

const SingleBook = ({ book }) => (
  <Col xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={book.img} alt={book.title} />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
      </Card.Body>
    </Card>
  </Col>
);

export default SingleBook;