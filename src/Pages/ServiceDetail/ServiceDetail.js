import React from "react";
import { Container } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  console.log(serviceId);
  return (
    <Container style={{ marginBottom: "350px" }} className="text-center mt-5">
      <h2>This is ServiceDetail {serviceId}</h2>
      <Link to="/checkout">
        <button className="btn btn-primary">Proceed Checkout</button>
      </Link>
    </Container>
  );
};
export default ServiceDetail;
