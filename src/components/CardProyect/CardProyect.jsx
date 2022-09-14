import { Row, Col, Modal, Button } from "react-bootstrap";
import { useState } from "react";
import seeder from "../../seed";
import "./cardproyect.css";

function CardProyect() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [modal, setModal] = useState([]);

  return (
    <div>
      <Row>
        {seeder &&
          seeder.map((item) => {
            return (
              <Col
                md="4"
                key={item.id}
                className="animated animatedFadeInUp fadeInUp"
              >
                <div>
                  <h1 id="title">{item.name}</h1>
                  <img src={item.img} id="img" alt="#"></img>
                  <button
                    variant="primary"
                    onClick={() => {
                      handleShow();
                      setModal({
                        name: item.name,
                        description: item.description,
                        img: item.img,
                        link: item.link,
                      });
                    }}
                    className="button"
                  >
                    More
                  </button>
                </div>
                <Modal
                  show={show}
                  onHide={handleClose}
                  size="lg"
                  aria-labelledby="contained-modal-title-vcenter"
                  centered
                >
                  <Modal.Header closeButton>
                    <Modal.Title>{modal.name}</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Row style={{ marginTop: "0" }}>
                      <Col md="6" id="image">
                        {" "}
                        <img src={modal.img} id="img" alt="#"></img>
                      </Col>
                      <Col md="6" id="description">
                        {modal.description}
                      </Col>
                    </Row>
                  </Modal.Body>
                  <Modal.Footer>
                    {/* <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button> */}

                    <button onClick={handleClose} id="modalWebsiteButton">
                      <a href={modal.link} target="_blank" rel="noreferrer">
                        Website
                      </a>
                    </button>
                  </Modal.Footer>
                </Modal>
              </Col>
            );
          })}
      </Row>
    </div>
  );
}

export default CardProyect;
