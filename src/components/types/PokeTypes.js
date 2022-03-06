import React from "react";
import { Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import types from "../../data/types";
import TypeCard from "./TypeCard";
import TypeDetail from "./TypeDetail";

function PokeTypes() {
    var { type } = useParams();
    var typeOf = types.filter(x => {return(x.Name === type)})[0];
    return (
        <>
            {
                types ?
                    <Container fluid>
                        <Row>
                            {types.map(i =>
                            (
                                <TypeCard key={i.id} data={i} />
                            ))}
                        </Row>
                    </Container>
                :
                    <p>Error</p>
            }
            {
                typeOf ?
                    <TypeDetail type={typeOf}></TypeDetail>
                :
                    <>Tip Seçiniz!</>
            }
        </>
    );

}

export default PokeTypes;