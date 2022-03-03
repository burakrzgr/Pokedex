import React, { useEffect } from "react";
import { Modal, Container, Button, ButtonGroup } from "react-bootstrap";
import { deletePokemon, fetchAllPokemon } from '../axios/pokeserver'
import { openNewPoke as OpenNewAction, loadPoke as LoadAction } from "../actions/actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

function DeletePokeConfirmation(props) {
    const deletePoke = () => {
        deletePokemon(props.id).then(res => { res.status === 200 ? removeDoneEvent(props.img) : failedEvent(res) });
    }
        
    useEffect(() => {
        setTimeout(() => {
            if(props.counter > 0)
                props.setCounter(prv => prv - 1);
        }, 1000);
        if(!props.show){
            props.setCounter(0);
        }
    },[props.counter,props.show]);  

    function removeDoneEvent(img) {
        fetchAllPokemon().then((rs) => {
            var pokeindex = rs.data.filter((x) => { return x.id < 99000; }).sort((x, y) => (x.id - y.id));
            props.actions.reload(pokeindex);
            props.actions.open({ showNewModal: false, newModalValue: undefined });
        });
        props.notifySuccess("deleted");
    }
    function failedEvent(res) {
        props.notifySuccess("delete",res);
        //console.log("Update/insert Error:", res)
    }
    return (
        <Modal
            show={props.show}
            size="sm"
            aria-labelledby="contained-modal-title-vcenter"
            onHide={() => props.handleClose(false)}
            className="pokepop"
            centered
        >
            <div style={{ boxShadow: '0px 0px 5px #3e3e3e'}} >
            <Modal.Header >
                <Modal.Title>Confirmation</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ height: '5rem' }}>
                <Container fluid>
                    <div>Delete {props.name}!</div>
                </Container>
            </Modal.Body>
            <Modal.Footer className="justify-content-between">
                <ButtonGroup aria-label="confirmation-group" className="w-100">
                    <Button variant="outline-secondary" className="w-50" onClick={() => {props.handleClose(false)}}>Cancel</Button>
                    <Button variant="danger" className="w-50" disabled={(props.counter > 0)} onClick={() => deletePoke()} >Delete {props.counter > 0 ? '[' + props.counter + ']':''} </Button>
                </ButtonGroup>
            </Modal.Footer>
            </div>
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