import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-style">
      <Container fluid="md">
        <Row>
          <Col md={6} className="my-auto">
            <h1 className="pb-3 fw-bold">
              Free Training: How to become Frontend Developer in under 90 days?
            </h1>
            <h5 className="pb-3">
              ✅ How to become a developer in 90 days even if you're a complete
              beginner
            </h5>
            <h5 className="pb-3">
              🛠️ Technologies you need (react, redux, firebase, and more)
            </h5>
            <h5 className="pb-3">
              🏫 How our exclusive Frontend Mastery Coding Bootcamp can help you
            </h5>
            <h5 className="pb-3">
              👨‍💻 What it takes to get job offers from big FANG tech companies
              like Facebook, Amazon, Netflix, and Google
            </h5>
          </Col>
          <Col md={6} className="my-auto text-center">
            <Button variant="primary" size="lg" className="fw-bold">
              <a
                className="text-decoration-none text-white"
                href="https://www.youtube.com/c/BasicProgrammer"
              >
                Yes, I want this FREE Training 🚀
              </a>
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
