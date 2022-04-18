import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./Reviews.css";

const Reviews = () => {
  return (
    <div className="reviews-style mt-5">
      <Container>
        <Row>
          <Col md={6} className="my-auto mx-auto pt-3 text-center">
            <h1 className="mb-5">Proven Courses & Real Results 😍</h1>
            <h4>
              No certifications or awards here. We focus on giving you real
              developer skills that bring you real results: Clients, jobs,
              self-improvement and profit. Our students aren't just satisfied...
              They've gotten real results as developers .👇
            </h4>
            <Button variant="primary" size="lg" className="fw-bold mt-5">
              Student Reviews ❤️
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Reviews;
