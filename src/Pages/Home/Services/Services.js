import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <Container fluid="md">
      <Row className="justify-content-md-center">
        <Col lg="8">
          <h1 className="text-center mb-5">
            Do you want to be a highly-paid developer? Explore our programs 👇
          </h1>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </Row>
    </Container>
  );
};

export default Services;
