import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";

const Login = () => {
  let errorElement;

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  if (error) {
    errorElement = <p className="text-danger">Error: {error?.message}</p>;
  }

  const navigate = useNavigate();

  const navigateRegister = () => {
    navigate("/register");
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    signInWithEmailAndPassword(email, password);
    console.log(email, password);
  };
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs="10" lg="6" className="mt-5 mx-auto">
          <h2 className="text-center my-3">Please Login</h2>
          <Form onSubmit={handleLogin} className="mb-3">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100">
              Login
            </Button>
          </Form>
          {errorElement}
          <p>
            New to Basic Programmer?{" "}
            <Link
              to="/register"
              className="text-primary text-decoration-none"
              onClick={navigateRegister}
            >
              Please Register
            </Link>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
