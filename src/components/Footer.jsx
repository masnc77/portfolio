import React from "react";
import "../css/footer.css";
import { Col } from "react-bootstrap";

function Footer() {
  return (
    <div id="footer">
      <Col md="6">
        <p>Montevideo, Uruguay.</p>
      </Col>

      <Col md="6">
        <p>Created by Marcos Sierra.</p>
      </Col>
    </div>
  );
}

export default Footer;
