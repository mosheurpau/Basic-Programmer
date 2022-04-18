import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../images/logo.png";
import "./Footer.css";
import {
  faFacebook,
  faGithub,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <footer>
      <Container fluid className="bg-black pt-3">
        <Row className="justify-content-md-center">
          <Col xs="12" lg="5" className="mt-3 footer-title">
            <div className="text-center">
              <img
                style={{
                  height: "50px",
                  border: "2px solid white",
                  borderRadius: "25px",
                }}
                src={logo}
                alt=""
              />
            </div>
            <h5 className="text-center ms-2 my-3 text-white">
              &copy; {new Date().getFullYear()} Basic Programmer
            </h5>
          </Col>

          <Col xs="12" lg="2"></Col>

          <Col xs="12" lg="5" className="mt-3 mx-auto text-center pt-3">
            <Link to="/" className=" text-decoration-none footer-menu">
              Careers
            </Link>

            <Link to="/" className="text-decoration-none footer-menu">
              Resources
            </Link>
            <Link to="/" className="text-decoration-none footer-menu">
              Terms
            </Link>
            <Link to="/" className="text-decoration-none footer-menu">
              Privacy
            </Link>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col xs="12" lg="4" className="mx-auto text-center p-2 mb-3">
            <FontAwesomeIcon icon={faFacebook} className="footer-icon" />
            <FontAwesomeIcon icon={faInstagram} className="footer-icon" />
            <FontAwesomeIcon icon={faGithub} className="footer-icon" />
            <FontAwesomeIcon icon={faYoutube} className="footer-icon" />
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
