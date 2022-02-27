import React from 'react';
import PokeType from './PokeType';
import { OverlayTrigger, Popover, Container, Button, Row, Col } from "react-bootstrap";

function TypeTooltip({ children, data, tooltipLevel }) {
    const Pop = (
        <Popover id="popover-contained" style={{ minWidth: "30rem" }} >
            <Popover.Header style={{ backgroundColor: data.Style.Header_Bg, color: data.Style.Header_Fg }}>
                <h4 className='m-0' style={{ fontWeight: '650' }}>
                    {data.Name}
                </h4>
            </Popover.Header>
            <Popover.Body style={{ backgroundColor: data.Style.Detail_Bg, color: data.Style.Detail_Fg }} >
                <Container >
                    <Row >
                        <Col md="auto">
                            {data.SE ? <PokeType list={data.SE} tooltipLevel={tooltipLevel -1}></PokeType> : <>Hata!</>}
                        </Col>
                    </Row>
                    <Row >
                        <Col md="auto">
                            {data.Desc}
                        </Col>
                    </Row>
                    <Row>
                        <Col className='p-3 pb-0 text-center' >
                            <Button variant='outline-dark' className='w-75' onClick={() => { alert("begone man-thing") }} style={{ backgroundColor: '#fff2' }}>Detaylar</Button>
                        </Col>
                    </Row>
                </Container>
            </Popover.Body>
        </Popover>
    );

        console.log(tooltipLevel);
    return (
        tooltipLevel > 0 ?
            <OverlayTrigger trigger="click" placement="right" overlay={Pop}>
                <span >{children}</span>
            </OverlayTrigger> :
            <span >{children}</span>);
};

export default TypeTooltip;