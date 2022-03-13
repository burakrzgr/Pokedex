import { Card, Container } from "react-bootstrap";
import { connect } from "react-redux";
import PokeRow from "../PokeRow";


function TypeDetail(props) {
    var typeList = props.pokemons.filter(x => { return x.Type.includes(props.type.Name); });
    return (
        <>
            <Container >
                <Card className="w-100">
                    <Card.Header className="text-dark">
                        <h3>{props.type.Name}</h3>
                    </Card.Header>
                    <Card.Body>
                        <PokeRow list={typeList}></PokeRow>
                    </Card.Body>
                </Card>
            </Container>
        </>

    );
}

export default connect(
    (state) => {
        return {
            pokemons: state.pokeReducer.pokemons
        };
    }, null
)(TypeDetail);