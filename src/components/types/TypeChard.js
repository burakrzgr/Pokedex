import { Card, Col, Container, Row } from "react-bootstrap";
import PokeType from "../PokeType";
import types from "../../data/types"

export default function TypeChart({ data }) {
    let strong =  types.filter(x => {
        return x.NE.includes(data.Name)
    }).map(x => x.Name);
    let weak =  types.filter(x => {
        return x.SE.includes(data.Name)
    }).map(x => x.Name);
    let resistant =  types.filter(x => {
        return x.Imm.includes(data.Name)
    }).map(x => x.Name);

    return (
        <>
            <Container fluid className="p-5">
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                Offensive
                            </Card.Header>
                            <Card.Body>
                                <Container fluid className="text-start text-dark">
                                    <Row className='pt-3'>
                                        <Col md="auto">
                                            <h5>Super Effective (x2)</h5>
                                            {data.SE && data.SE.length ? <PokeType list={data.SE} tooltipLevel={2}></PokeType> : <h5 className='text-muted ps-2 NotExistText' ><i>Not Exist</i></h5>}
                                        </Col>
                                    </Row>
                                    <Row className='pt-3'>
                                        <Col md="auto">
                                            <h5>Not Very Effective (x0.5)</h5>
                                            <div>
                                                {data.NE && data.NE.length ? <PokeType list={data.NE} tooltipLevel={2}></PokeType> : <h5 className='text-muted ps-2 NotExistText' ><i>Not Exist</i></h5>}
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row className='pt-3'>
                                        <Col md="auto">
                                            <h5>Immune (x0)</h5>
                                            <div>
                                                {data.Imm && data.Imm.length ? <PokeType list={data.Imm} tooltipLevel={2}></PokeType> : <h5 className='text-muted ps-2 NotExistText'><i>Not Exist</i></h5>}
                                            </div>
                                        </Col>
                                    </Row>
                                </Container>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Header>
                                Deffensive
                            </Card.Header>
                            <Card.Body>
                                <Container fluid className="text-start text-dark">
                                    <Row className='pt-3'>
                                        <Col md="auto">
                                            <h5>Strong Against (x2)</h5>
                                            {strong && strong.length ? <PokeType list={strong} tooltipLevel={2}></PokeType> : <h5 className='text-muted ps-2 NotExistText' ><i>Not Exist</i></h5>}
                                        </Col>
                                    </Row>
                                    <Row className='pt-3'>
                                        <Col md="auto">
                                            <h5>Weak Against  (x0.5)</h5>
                                            <div>
                                                {weak && weak.length ? <PokeType list={weak} tooltipLevel={2}></PokeType> : <h5 className='text-muted ps-2 NotExistText' ><i>Not Exist</i></h5>}
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row className='pt-3'>
                                        <Col md="auto">
                                            <h5>Resistant to (x0)</h5>
                                            <div>
                                                {resistant && resistant.length ? <PokeType list={resistant} tooltipLevel={2}></PokeType> : <h5 className='text-muted ps-2 NotExistText'><i>Not Exist</i></h5>}
                                            </div>
                                        </Col>
                                    </Row>
                                </Container>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>



            </Container>
        </>);
}