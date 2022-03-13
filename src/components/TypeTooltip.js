import React from 'react';
import PokeType from './PokeType';
import { OverlayTrigger, Popover, Container, Button, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';

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
                            {data.Desc}
                        </Col>
                    </Row>
                    <Row className='pt-3'>
                        <Col md="auto">
                            <h5>Super Effective (x2)</h5>
                            {data.SE && data.SE.length ? <PokeType list={data.SE} tooltipLevel={tooltipLevel - 1}></PokeType> : <h5 className='text-muted ps-2 NotExistText' ><i>Not Exist</i></h5>}

                        </Col>
                    </Row>
                    <Row className='pt-3'>
                        <Col md="auto">
                            <h5>Not Very Effective (x0.5)</h5>
                            <div>
                                {data.NE && data.NE.length ? <PokeType list={data.NE} tooltipLevel={tooltipLevel - 1}></PokeType> : <h5 className='text-muted ps-2 NotExistText' ><i>Not Exist</i></h5>}
                            </div>
                        </Col>
                    </Row>
                    <Row className='pt-3'>
                        <Col md="auto">
                            <h5>Immune (x0)</h5>
                            <div>
                                {data.Imm && data.Imm.length ? <PokeType list={data.Imm} tooltipLevel={tooltipLevel - 1}></PokeType> : <h5 className='text-muted ps-2 NotExistText'><i>Not Exist</i></h5>}
                            </div>
                        </Col>
                    </Row>
                    <Row className='pt-3'>
                        <Col className='p-3 pb-0 text-center' >
                            <Link to={"/types/" + data.Name}>
                                <Button variant='outline-dark' className='w-50' style={{ backgroundColor: '#fff2' }}>Go To Detail</Button>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </Popover.Body>
        </Popover>
    );
    return (
        tooltipLevel > 0 ?
            <OverlayTrigger trigger="click" placement="right" overlay={Pop}>
                <span >{children}</span>
            </OverlayTrigger> :
            <span >{children}</span>);
};

export default TypeTooltip;