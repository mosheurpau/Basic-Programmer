import React from "react";
import { Container } from "react-bootstrap";
import notFoud from "../../images/NotFound.jpg";
const NotFound = () => {
  return (
    <Container>
      <img className="w-100 h-100" src={notFoud} alt="" />
    </Container>
  );
};

export default NotFound;
