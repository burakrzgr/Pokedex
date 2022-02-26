import React from 'react';
import { OverlayTrigger, Popover, Container, Row, Col } from "react-bootstrap";

function TypeTooltip({children}) {
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
            {children}
        </OverlayTrigger>);
};

export default TypeTooltip;