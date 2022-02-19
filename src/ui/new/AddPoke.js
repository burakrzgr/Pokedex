import { Modal, Container, Row, Col, Form, Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import "../../button.css";
import ColorPicker from "../misc/ColorPicker";
import $ from 'jquery';


function AddPoke({ show, handleClose }) {
  const [bColor, setBColor] = React.useState('#FFF');
  const [fColor, setFColor] = React.useState('#000');

    const backgroundPickedEvent = (cl) => {
        setBColor(cl.hex);
    }
    const foregroundPickedEvent = (cl) => {
        setFColor(cl.hex);
    }
    useEffect(() => {
        $(".pokeAdd").attr("tabindex", null);
    });
    return (
        
        <Modal
            show={show}
            size="xl"
            aria-labelledby="contained-modal-title-vcenter"
            onHide={handleClose}
            backdrop="static"
            centered
            className="pokeAdd"
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
                            <Form.Group className="mb-3" controlId="newpoke.BColor">
                                <Form.Label>Background Color</Form.Label>
                                <div>
                                    <ColorPicker color={"#ffffff"} colorPickedEvent={backgroundPickedEvent} />
                                </div>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="newpoke.FColor">
                                <Form.Label>Foreground Color</Form.Label>
                                <div>
                                    <ColorPicker color={"#000000"} colorPickedEvent={foregroundPickedEvent} />
                                </div>
                            </Form.Group>
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