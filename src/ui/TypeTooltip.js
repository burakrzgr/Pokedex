import React from 'react';
import { Popover, Container, Row, Col } from "react-bootstrap";

function TypeTooltip(data) {
   
    return (
        <Popover id="popover-contained"  >
            <Popover.Header>
                {data.Name}
            </Popover.Header>
            <Popover.Body className='p-0' >
                <Container className='p-0'>
                    <Row >
                        <Col md="auto">
                        {data.Desc}
                        </Col>
                    </Row>
                </Container>
            </Popover.Body>
        </Popover>
    );
};

export default ColorPicker;