import "./mainNavbar.css";

import React from "react";
import { useEffect } from "react";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";

const MainNavbar = () => {
  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY > 0) {
      }
    };
  });

  return (
    <div className="box">
      <Navbar className="navbar">
        <Container>
          <Navbar.Brand className="name">Marcos Sierra</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <div className="links ">
              <Link to="/" className="link">
                <Nav className="link">Home</Nav>
              </Link>

              <Link to="/about" className="link">
                <Nav className="link">About</Nav>
              </Link>

              <Link to="/contact" className="link">
                <Nav className="link">Contact</Nav>
              </Link>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default MainNavbar;
