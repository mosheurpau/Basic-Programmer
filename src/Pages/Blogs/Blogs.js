import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Blogs = () => {
  return (
    <Container>
      <Row>
        <Col md={8} className="my-auto mx-auto mt-5">
          <h4 className="text-start">
            Difference between authorization and authentication?
          </h4>
          <p className="text-justify py-2">
            Authentication is the act of checking and confirming an employee's
            ID and password in an organization, but authorisation is the process
            of establishing which employee has access to which floor.
          </p>
          <h4 className="text-start mt-5">
            Why are you using firebase? What other options do you have to
            implement authentication?
          </h4>
          <p className="text-justify py-2">
            By giving secure access to the database from client-side code, the
            Firebase Realtime Database enables you to build complex,
            collaborative apps. Data is saved locally, and real-time events
            continue to trigger even when the computer is turned off, providing
            a responsive experience for the end user. <br /> <br />
            Other options do you have to implement authentication: <br />
            STYTCH, Ory, Supabase, Okta, PingIdentity, Keycloak, Frontegg,
            Authress, Auth0, Amazon Cognito, OneLogin,
          </p>
          <h4 className="text-start mt-5">
            What other services does firebase provide other than authentication?
          </h4>
          <p className="text-justify py-3">
            Firebase offers a variety of services, the most useful of which are:{" "}
            <br />
            Cloud Firestore <br />
            Cloud Functions <br />
            Hosting <br />
            Cloud Storage <br />
            Google Analytics <br />
            Predictions <br />
            Cloud Messaging <br />
            Dynamic Links <br />
            Remote Config <br />
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Blogs;
