import React from 'react';
import { OverlayTrigger, Popover, Container,Button, Row, Col } from "react-bootstrap";

function TypeTooltip({children,data}) {
    const Pop = (
        <Popover id="popover-contained"  >
            <Popover.Header>
                {data.Name}
            </Popover.Header>
            <Popover.Body  >
                <Container >
                    <Row >
                        <Col md="auto">
                        {data.Desc}
                        </Col>
                    </Row> 
                     <Row >
                        <Col md="auto">
                        <Button variant='dark' onClick={() => {alert("begone man-thing")}}>Tip Detayları</Button>
                        </Col>
                    </Row>
                </Container>
            </Popover.Body>
        </Popover>
    );
   
    return (
        <OverlayTrigger trigger="click" placement="right" overlay={Pop}>
            <span >{children}</span>
        </OverlayTrigger>);
};

export default TypeTooltip;