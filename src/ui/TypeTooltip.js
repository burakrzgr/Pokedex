import React, { useEffect } from 'react';
import { SketchPicker } from 'react-color';
import { OverlayTrigger, Button, Popover, Container, Row, Col } from "react-bootstrap";

function TypeTooltip({Component,data}) {
    const Pop = (
        <Popover id="popover-contained"  >
            <Popover.Header>
                {"Yes-Yes"}
            </Popover.Header>
            <Popover.Body className='p-0' >
                <Container className='p-0'>
                    <Row >
                        <Col md="auto">
                        {"man-thing"}
                        </Col>
                    </Row>
                </Container>
            </Popover.Body>
        </Popover>
    );
   
    return (
        <OverlayTrigger trigger="click" placement="right" overlay={Pop}>
            <Component />
        </OverlayTrigger>);
};

export default TypeTooltip;