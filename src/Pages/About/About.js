import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const About = () => {
  return (
    <Container style={{ marginBottom: "100px" }}>
      <Row>
        <Col md={8} className="my-auto mx-auto mt-5 my-5">
          <div className="d-flex align-items-center justify-content-center mb-3">
            <img
              className="img-fluid"
              src={"https://i.ibb.co/Jnkpckv/Mosheur-CEO.png"}
              alt=""
            />
          </div>

          <p className="text-justify py-2">
            Hi, I'm Mosheur Rahman. Founder and CEO @ Basic Programmer. I
            started Basic Programmer, A group of students who are learning to
            code through the creation of real-world projects. My mission is
            straightforward: to teach the world how to make things with code.
            <br /> <br />
            Why? Because Dreams + Code = Reality.
            <br /> <br />
            I am an enthusiastic, self-motivated, reliable, responsible, and
            hard-working person. InshaAllah, I want to build myself as a
            profession complete web developer and work as a software engineer in
            the country and abroad. <br />
            Finally, I enjoy making things simple for the rest of the world.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
