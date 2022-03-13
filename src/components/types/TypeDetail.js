import { Card, Container } from "react-bootstrap";
import { connect } from "react-redux";
import PokeRow from "../PokeRow";


function TypeDetail(props) {
    var typeList = props.pokemons.filter(x => { return x.Type.includes(props.type.Name); });
    return (
        <>
            <Container fluid>
                <Card className="w-100">
                    <Card.Header style={{backgroundColor:props.type.Style.Header_Bg,color:props.type.Style.Header_Fg}}>
                        <h3>{props.type.Name}</h3>
                    </Card.Header>
                    <Card.Body style={{backgroundColor:props.type.Style.Detail_Bg,color:props.type.Style.Detail_Fg}}>
                        <p>{props.type.Desc}</p>
                        <p>{typeList.length + " adet poemon bu kategoridedir."}</p>
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