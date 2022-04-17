import { signOut } from "firebase/auth";
import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import logo from "../../../images/logo.png";
import CustomLink from "../../CustomLink/CustomLink";
import "./Header.css";

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="light"
        bg="light"
        className="p-2"
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              alt=""
              src={logo}
              width="=80"
              height="80"
              className="d-inline-block align-center nav-logo"
            />{" "}
            <b className="logo-title">
              <span className="text-danger">Basic</span> Programmer
            </b>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="text-center px-5 mx-5"
          >
            <Nav className="ms-auto">
              <Nav.Link as={CustomLink} to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={CustomLink} to="/services">
                Services
              </Nav.Link>
              <Nav.Link as={CustomLink} to="/blogs">
                Blogs
              </Nav.Link>
              <Nav.Link as={CustomLink} to="/about">
                About
              </Nav.Link>
              <Nav.Link>
                {user ? (
                  <Button
                    onClick={handleSignOut}
                    variant="link"
                    className="text-danger text-decoration-none"
                  >
                    <b>Log Out</b>
                  </Button>
                ) : (
                  <Nav.Link className="my-auto" as={CustomLink} to="/login">
                    Login
                  </Nav.Link>
                )}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
