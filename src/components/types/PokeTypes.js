import React from "react";
import { Container,Row } from "react-bootstrap";
import types from "../../data/types"
import TypeCard from "./TypeCard"

function PokeTypes() {
    return (
        types ?
            <Container fluid>
                <Row>
                    {types.map(i =>
                    (
                        <TypeCard key={i.id} data={i} />
                    ))}
                </Row>
            </Container>
            : <p>No Type Found</p>);

}

export default PokeTypes;