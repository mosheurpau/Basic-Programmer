import React from "react";
import { Button, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Service = ({ service }) => {
  const { id, name, img, description, price } = service;
  const navigate = useNavigate();
  const navigateToServiceDetail = (id) => {
    navigate(`/services/${id}`);
  };
  return (
    <Col lg="4" className="text-center mb-5">
      <img className="w-100" src={img} alt="" />
      <h2 className="pt-3">{name}</h2>
      <h3>One Time Payment ${price}</h3>
      <p>{description}</p>
      <Button
        onClick={() => navigateToServiceDetail(id)}
        variant="primary"
        size="lg"
        className="fw-bold"
      >
        Explore {name}🚀
      </Button>
    </Col>
  );
};

export default Service;
