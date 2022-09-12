import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import "./contact.css";

function Contact() {
  return (
    <div className="container">
      <h1>Contact</h1>
      <div class="form__group field">
        <input
          type="input"
          class="form__field"
          placeholder="Name"
          name="name"
          id="name"
          required
        />
        <label for="name" class="form__label">
          Name
        </label>
      </div>
      <form>
        <Row>
          <Col md="6">
            <div>
              <label>Name</label>
              <input type="text" placeholder="For example: John" />
            </div>
          </Col>
          <Col md="6">
            <div>
              <label>Last Name</label>
              <input type="text" placeholder="For example: Pérez" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <div>
              <label>E-mail</label>
              <input
                type="email"
                placeholder="For example: johnperez@gmail.com"
              />
            </div>
            <div>
              <label>Comment</label>
              <textarea placeholder="For example: Dear Marcos..." />
            </div>
          </Col>
        </Row>
        <Button>holis</Button>
      </form>
    </div>
  );
}

export default Contact;
