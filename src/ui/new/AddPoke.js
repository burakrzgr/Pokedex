import { Modal, Container, Row, Col, Form, Button } from "react-bootstrap";
import React, { useEffect } from "react";
import "../../button.css";
import ColorPicker from "../misc/ColorPicker";
import TypeControl from "./TypeControl";
import $ from 'jquery';
import FileUpload from "../misc/FileUpload";


function AddPoke({ show, handleClose }) {
    
    const [img, setImg] = React.useState(null);
    const [bColor, setBColor] = React.useState('#FFF');
    const [fColor, setFColor] = React.useState('#000');
    const [types, setTypes] = React.useState({arr:[]});

    const backgroundPickedEvent = (cl) => {
        console.log(cl);
        setBColor(cl);
    }
    const foregroundPickedEvent = (cl) => {
        setFColor(cl);
    }
    useEffect(() => {
        $(".pokeAdd").attr("tabindex", null);
    });

    const savePoke = () => {
        console.log("bcolor",bColor);   
        console.log("fcolor",fColor);
        console.log("type",types); 
        console.log("img",img); 
    }

    return (

        <Modal
            show={show}
            size="xl"
            aria-labelledby="contained-modal-title-vcenter"
            onHide={handleClose}
            backdrop="static"
            className="pokeAdd"
            centered
        >
            <Container style={{ backgroundColor: "#FFF" }} fluid>
                <Row>
                    <Col md="auto" className="m-1">
                        <FileUpload className={{ height: "100%" }} file={img} setFile={setImg} ></FileUpload>
                    </Col>
                    <Col>
                        <Modal.Header closeButton>
                            <Modal.Title
                                id="contained-modal-title-vcenter"
                                style={{ color: '#000' }}
                            >
                                <Container className="ps-0" fluid>
                                    <Row>
                                        <Col xl={4}>
                                            <Form.Group className="mb-3" controlId="newpoke.No">
                                                <Form.Label>#No</Form.Label>
                                                <Form.Control type="number" min="1" max="999" placeholder="#No" />
                                            </Form.Group>
                                        </Col>
                                        <Col xl={8}>
                                            <Form.Group className="mb-3" controlId="newpoke.Name">
                                                <Form.Label>Pokemon Name</Form.Label>
                                                <Form.Control type="text" placeholder="Poke Name" />
                                            </Form.Group>
                                        </Col></Row>
                                </Container>
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body style={{ color: '#000' }}>
                            <Form.Group className="mb-3" controlId="newpoke.Desc">
                                <Form.Label>Description</Form.Label>
                                <Form.Control as="textarea" rows={2} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="newpoke.types">
                                <Form.Label>Type(s)</Form.Label>
                                <div>
                                    <TypeControl list={types} typeChanged={setTypes} />
                                </div>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="newpoke.BColor">
                                <Form.Label>Background Color</Form.Label>
                                <div>
                                    <ColorPicker color={bColor} colorPickedEvent={backgroundPickedEvent} />
                                </div>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="newpoke.FColor">
                                <Form.Label>Foreground Color</Form.Label>
                                <div>
                                    <ColorPicker color={fColor} colorPickedEvent={foregroundPickedEvent} />
                                </div>
                            </Form.Group>
                        </Modal.Body>
                        <Modal.Footer className="justify-content-between">
                            <div></div>
                            <Button variant="primary" onClick={() => savePoke()}>Add Pokemon</Button>
                        </Modal.Footer>
                    </Col>
                </Row>
            </Container>
        </Modal>

    );
}

export default AddPoke;