import { Modal, Container, Row, Col, Form, Button } from "react-bootstrap";
import React, { useState } from "react";
import "../../button.css";
import ColorPicker from "../misc/ColorPicker";

function AddPoke({ show, handleClose }) {
  const [bColor, setBColor] = React.useState('#FFF');

    const backgroundPickedEvent = (cl) => {
        setBColor(cl.hex);
        console.log("de",cl);
    }


    return (
        <Modal
            show={show}
            size="xl"
            aria-labelledby="contained-modal-title-vcenter"
            onHide={handleClose}
            backdrop="static"
            centered
        >
            <Container style={{ backgroundColor: "#FFF" }} fluid>
                <Row>
                    <Col md="auto" className="m-1">
                   
                            <div
                                style={{
                                    height: "20rem",
                                    width: "20rem",
                                    objectFit: "contain",
                                    border: "1px solid black"
                                }}
                                alt="Pokemon"
                            >
                                <p style={{textAlign:"center"}}>Resimi Buraya Sürükleyin</p>
                            </div>
                    </Col>
                    <Col>
                        <Modal.Header closeButton>
                            <Modal.Title
                                id="contained-modal-title-vcenter"
                                style={{ color: '#000' }}
                            >
                            <Form.Group className="mb-3" controlId="newpoke.Name">
                                <Form.Label>Pokemon Name</Form.Label>
                                <Form.Control type="text" placeholder="Poke Name" />
                            </Form.Group>
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body style={{ color: '#000' }}>
                            <Form.Group className="mb-3" controlId="newpoke.Desc">
                                <Form.Label>Description</Form.Label>
                                <Form.Control as="textarea" rows={2} />
                            </Form.Group>
                            <Form.Label>Background Color</Form.Label>
                            <ColorPicker color={"#FFF"} colorPickedEvent={backgroundPickedEvent} />
                        </Modal.Body>
                        <Modal.Footer className="justify-content-between">
                            <Button variant="outline-secondary">İptal</Button>
                            <Button  variant="primary">Add Pokemon</Button>
                        </Modal.Footer>
                    </Col>
                </Row>
            </Container>
        </Modal>
    );
}

export default AddPoke;