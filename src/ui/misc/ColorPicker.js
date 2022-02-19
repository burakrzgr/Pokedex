import React, { useEffect } from 'react';
import { SketchPicker } from 'react-color';
import { OverlayTrigger, Button, Popover, Container, Row, Col } from "react-bootstrap";

function ColorPicker({ color: exColor, colorPickedEvent }) {
    useEffect(() => {
        setColor(exColor);
    },
        [exColor]);
    const [color, setColor] = React.useState(exColor);
    const handleChange = (_color) => {
        console.log(_color.hex);
        setColor(_color.hex);
    };
    const Pop = (
        <Popover id="popover-contained"  >
            <Popover.Body className='p-0' >
                <Container className='p-0'>
                    <Row >
                        <Col md="auto">
                            <Comp />
                        </Col>
                    </Row>
                </Container>
            </Popover.Body>
        </Popover>
    );
    function Comp({cColor,cEvent}) {
        return (
            <SketchPicker 
                disableAlpha={true} 
                color={color}
                onChangeComplete={handleChange}
                
            />);
    };
    return (
        <OverlayTrigger trigger="click" placement="right" overlay={Pop}>
            <Button variant="secondary text-white text-start" style={{ backgroundColor: color, textShadow: "0px 0px 4px #000", width: "10rem" }} >Renk {color}</Button>
        </OverlayTrigger>);
};

export default ColorPicker;