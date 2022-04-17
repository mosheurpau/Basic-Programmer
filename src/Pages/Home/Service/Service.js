import React from "react";
import { Col } from "react-bootstrap";

const Service = ({ service }) => {
  const { id, name, img, description, price } = service;
  return (
    <Col lg="4">
      <img className="w-100" src={img} alt="" />
      <h2 className="py-3">{name}</h2>
      <p>{description}</p>
    </Col>
  );
};

export default Service;
