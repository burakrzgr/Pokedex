import { Modal, Container, Row, Col, Form, Button, Stack } from "react-bootstrap";
import { deletePokemon,fetchAllPokemon } from '../axios/pokeserver'
import { openNewPoke as OpenNewAction, loadPoke as LoadAction } from "../actions/actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

function DeletePokeConfirmation(props){
    const deletePoke = () => {
        deletePokemon(props.id).then(res => {res.status === 200 ? removeDoneEvent(props.img) : failedEvent(res)});
    }
    
    function removeDoneEvent(img) {
        fetchAllPokemon().then((rs) => {
            var pokeindex = rs.data.filter((x) => { return x.id < 99000; }).sort((x, y) => (x.id - y.id));
            props.actions.reload(pokeindex);
            props.actions.open({ showNewModal: false, newModalValue: undefined });
        });
    }
    function failedEvent(res) {
        console.log("Update/insert Error:", res)
    }
    return (
        <Modal
            show={props.show}
            size="xl"
            aria-labelledby="contained-modal-title-vcenter"
            onHide={() => props.handleClose(false)}
            className="pokepop"
            centered
        >
           <Container fluid>
                <div>Delete {props.name}!</div>
                <Button variant="outline-secondary" onClick={() => props.handleClose(false)} >Cancel</Button>
                <Button variant="danger" onClick={() => deletePoke()} >Delete</Button>
           </Container>
        </Modal>
   );
}


function mapDispatchToProps(dispatch) {
    return {
        actions: {
            open: bindActionCreators(OpenNewAction, dispatch),
            reload: bindActionCreators(LoadAction, dispatch)
        },
    };
}

export default connect(null, mapDispatchToProps)(DeletePokeConfirmation);