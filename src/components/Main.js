import React, { Component } from "react";
import PokeCard from "./PokeCard"
import { Row, Container } from 'react-bootstrap';
import Popup from "./Popup";
import AddPoke from "./new/AddPoke";
import { connect } from "react-redux";
import { misc } from "../data/misc";

// test 2
class Main extends Component {

    constructor(props) {
        super(props);

        if (props.search) {
            var poke = this.props.pokemons.filter(x => { return (x.Name.toLowerCase() === props.search.toLowerCase()) })[0];
            if (poke) {
                this.state = {
                    showNewPoke: false,
                    modalData: { data: poke, show: true }
                };
            }
            else {
                this.state = {
                    showNewPoke: false,
                    modalData: { data: misc[0], show: true }
                };
            }

        }
        else {

            this.state = {
                showNewPoke: props.showNewPoke,
                modalData: { data: {}, show: false }
            };
        }
    };

    render() {
        const setShow = (vis) => {
            this.setState(ps => ({ ...ps, modalData: { ...ps.modalData, show: vis } }));
        };
        const setData = (data) => {
            this.setState(ps => ({ ...ps, modalData: { data: { ...data }, show: true } }));
        };
        const closeEdit = () => {
            this.setState(ps => ({ ...ps, editNewPoke: false }));
        };
        return (
            <Container fluid>
                <Row>
                    {this.props.filteredPokemons.map((data, key) => {
                        return (
                            <PokeCard key={key} data={data} setModalShow={() => {
                                setData(data)
                            }} />
                        );
                    })}
                </Row>
                <Popup
                    data={this.state.modalData.data}
                    show={this.state.modalData.show}
                    handleClose={() => setShow(false)}
                    setModalShow={(data) => setData(data)}
                />
                <AddPoke
                    handleClose={() => closeEdit()}
                />
            </Container>
        );
    }
}

function mapStateToProps(state) {
    return {
        pokemons: state.pokeReducer.pokemons,
        filteredPokemons: state.pokeReducer.filteredPokemons ? state.pokeReducer.filteredPokemons : state.pokeReducer.pokemons
    };
}

export default connect(mapStateToProps, null)(Main);
