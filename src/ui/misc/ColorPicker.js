import React, { useEffect } from 'react';
import { SketchPicker } from 'react-color';
import { OverlayTrigger, Button, Popover, Container, Row, Col,ButtonGroup } from "react-bootstrap";

function ColorPicker({color: exColor , colorPickedEvent}) {
    useEffect(()=> { 
        
        
        console.log("eff",exColor);
        setColor(exColor);},[exColor]);
    const [color, setColor] = React.useState(exColor);
    const handleChangeComplete = (color) => {
        setColor(color.hex);
        console.log("done");
    };
    const Pop = (
        <Popover id="popover-basic" >
            <Popover.Body className='p-0' >
                <Container className='p-0'>
                    <Row >
                        <Col md="auto">
                            <Comp />
                        </Col>
                    </Row>
                    <Row>
                        <Col >
                        <ButtonGroup size="sm" className="m-1 p-0 d-flex" >
                            <Button variant='outline-secondary'>İptal</Button>
                            <Button onClick={() => colorPickedEvent(color)}>Seç</Button>
                            </ButtonGroup>
                        </Col>
                    </Row>
                </Container>
            </Popover.Body>
        </Popover>
    );
    function Comp() {
        return (
            <SketchPicker
                color={color}
                onChangeComplete={handleChangeComplete}
            />);
    };
    return (
        <OverlayTrigger trigger="click" placement="right" overlay={Pop}>
            <Button variant="secondary text-white" style={{backgroundColor: color,  textShadow: "0px 0px 3px #000", width:"9rem"}} >Renk {color}</Button>
        </OverlayTrigger>);
};


export default ColorPicker;