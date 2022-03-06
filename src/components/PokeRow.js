import { Button, Row, Col,Container } from "react-bootstrap"
import { Link } from "react-router-dom";

export default function PokeRow({ list }) {
    return (
        <>
            {list ? list.map(x => {
                return (
                    <Container key={x.id} className="card text-dark text-start">
                        <Row>
                            <Col>
                                {x.Name}
                            </Col>
                            {x.Type.toString()}
                            <Col >
                                {x.Desc.substring(0, 30)}
                            </Col>
                            <Col>
                                {x.Ability.toString()}
                            </Col>
                            <Col>
                                <Link  to={"/pokemons/" + x.Name}>
                                    <Button variant="outline-dark" className="mt-1">Go To Detail</Button>
                                </Link>
                            </Col>
                        </Row>
                    </Container>
                );
            }) : <></>}
        </>
    );
}

