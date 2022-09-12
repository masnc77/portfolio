import React from "react";
import { Row, Col } from "react-bootstrap";
import yo from "../../img/ms1.JPG";
import dino from "../../img/dino.png";
import "./about.css";

function About() {
  return (
    <div className="container">
      <Row className="row animated animatedFadeInUp fadeInUp">
        <Col md="3">
          <img src={yo} alt="Marcos_photo" className="img1" />
        </Col>
        <Col md="9">holis</Col>
      </Row>
      <Row className="row animated animatedFadeInUp fadeInUp">
        <Col md="9">holis 2</Col>
        <Col md="3">
          <img src={dino} alt="Marcos_in_dino_custome" className="img2" />
        </Col>
      </Row>
    </div>
  );
}

export default About;
