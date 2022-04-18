import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import google from "../../../images/socialIcon/google.png";
import github from "../../../images/socialIcon/github.png";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs="10" lg="6" className="mt-2 mx-auto">
          <div className="d-flex align-items-center">
            <div style={{ height: "1px" }} className="bg-primary w-50"></div>
            <p className="mt-2 px-2">or</p>
            <div style={{ height: "1px" }} className="bg-primary w-50"></div>
          </div>
          <div>
            <Button
              variant="outline-primary"
              onClick={() => signInWithGoogle()}
              className="w-75 d-block mx-auto my-2"
            >
              <img style={{ width: "30px" }} src={google} alt="" />
              <span className="px-2">Google Sign In</span>
            </Button>
            <Button
              variant="outline-primary"
              onClick={() => signInWithGithub()}
              className="w-75 d-block mx-auto my-2"
            >
              <img style={{ width: "30px" }} src={github} alt="" />
              <span className="px-2">Github Sign In</span>
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SocialLogin;
