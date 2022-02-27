import React, { Component } from 'react';
import { FormControl, InputGroup, Button, Container, Row, Col } from 'react-bootstrap';
import SearchIcon from '../resource/pikachu_pink_removed.png';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {search as SearchAction} from "../actions/actions";

class Search extends Component //({ keypres,addPokeEvent }) => 
{
    constructor(props) {
        super(props);
       
        this.state = {
            addPokeEvent: props.addPokeEvent
        };
       }
    render() {
        return (
            <Container>
                <Row>
                    <Col xxl="12">
                        <InputGroup className="m-3">
                            <FormControl
                                placeholder="Pokémon'un Adını Buraya Yazın!"
                                aria-label="Pokemon Aratma Alanı"
                                aria-describedby="basic-addon2"
                                //   onKeyUp={keypres}
                                onKeyUp={(e) => this.props.actions.search(e.target.value)}
                            />
                            <Button id="button-addon2" variant="danger" onClick={() => this.state.addPokeEvent(true)} >
                                <img src={SearchIcon} alt="Logo" style={{ width: "30px", height: "30px" }} />
                            </Button>
                        </InputGroup>
                    </Col>
                </Row>
            </Container>
        );
    }
}
function mapDispatchToProps(dispatch) {
    return {
        actions: {
            search: bindActionCreators(SearchAction, dispatch),
        },
    };
}
export default connect(null, mapDispatchToProps)(Search);
