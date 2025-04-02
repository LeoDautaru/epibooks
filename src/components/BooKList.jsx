import React from "react";
import { Container, Nav, Navbar, Alert, Card, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import SingleBook from "./SingleBook";

const BookList = ({ books }) => (
  <Container className="mt-4">
    <Row className="g-4">
      {books.map((book) => (
        <SingleBook key={book.asin} book={book} />
      ))}
    </Row>
  </Container>
);
export default BookList;