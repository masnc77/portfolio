import "./mainNavbar.css";

import React from "react";
import { useEffect } from "react";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";

const MainNavbar = () => {
  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY > 0) {
      }
    };
  });

  return (
    <div className="box">
      <Navbar
        className="nav"
        collapseOnSelect
        expand="md"
        /* bg="dark" */ fixed="top"
      >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Row>
            <Col md={4}>
              <Navbar className="name">Marcos Sierra</Navbar>
            </Col>
            <Col md={4}>
              <div>a</div>
            </Col>
            <Col md={4}>
              <Row>
                <Nav className="themes">
                  <Col md={4}>
                    <Link to="/">
                      <Nav className="link">Home</Nav>
                    </Link>
                  </Col>
                  <Col md={4}>
                    <Link to="/about">
                      <Nav className="link">About</Nav>
                    </Link>
                  </Col>
                  <Col md={4}>
                    <Link to="/contact">
                      <Nav className="link">Contact</Nav>
                    </Link>
                  </Col>
                </Nav>
              </Row>
            </Col>
          </Row>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default MainNavbar;
