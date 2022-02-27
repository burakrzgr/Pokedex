import React, { Component } from "react";
import PokeCard from "./PokeCard"
import { Row, Container } from 'react-bootstrap';
import Popup from "./Popup";
import AddPoke from "./new/AddPoke";
import NewCard from "./new/NewCard";
import { connect } from "react-redux";

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showNewPoke: props.showNewPoke,
      modalData: { data: {}, show: false }
    };
  };
  render() {
    const setShow = (vis) => {
      this.setState(ps => ({ ...ps, modalData: { ...ps.modalData, show: vis }}));
    };
    const setData = (data) => {
      this.setState(ps => ({ ...ps, modalData: { data: { ...data }, show: true } }));
    };
    const closeEdit = () => {
      this.setState(ps => ({ ...ps, editNewPoke :false }));
    };
    return (
      <Container fluid >
        <Row>
          {this.props.filteredPokemons.map((data, key) => {
            return (
              <PokeCard key={key} data={data} setModalShow={() => { setData(data) }} /> //bcolor={data.BColor} fcolor={data.FColor} img={data.Img} name={data.Name} desc={data.Desc} type={data.Type} />
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
      </Container >
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
