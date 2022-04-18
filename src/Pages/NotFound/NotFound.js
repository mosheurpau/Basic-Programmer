import React from "react";
import { Container } from "react-bootstrap";
import notFound from "../../images/NotFound.jpg";
const NotFound = () => {
  return (
    <Container>
      <img className="w-100 h-100" src={notFound} alt="" />
    </Container>
  );
};

export default NotFound;
