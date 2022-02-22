import React, { Component } from "react";
import PokeCard from "./PokeCard"
import { Row, Container } from 'react-bootstrap';
import Popup from "./Popup";
import AddPoke from "./new/AddPoke";
import NewCard from "./new/NewCard";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "../actions/actions";

//const[modalData, setModalData] = React.useState({ data: { }, show:false});
  
class Main extends Component {// ({ list,addPokeEvent,showNewPoke }) => 

  constructor(props) {
    super(props);
    console.log("ahh",props);
    this.state = {
      addPokeEvent: props.addPokeEvent,
      showNewPoke: props.showNewPoke,
      modalData : { data: { }, show:false}
    };
  };


  
  render() {

    function setShow (vis) {
      this.state.modalData.show = vis ;// = ({ ...modalData, show: vis });
    };
    function setData (data) {
      this.state.modalData = ({ data: { ...data }, show: true });
    };

    return (
      <Container fluid >
        <Row>
          {this.props.filteredPokemons.map((data, key) => {
            return (
              <PokeCard key={key} data={data} setModalShow={setData} /> //bcolor={data.BColor} fcolor={data.FColor} img={data.Img} name={data.Name} desc={data.Desc} type={data.Type} />
            );
          })}
          <NewCard addPokeEvent={this.state.addPokeEvent} />
        </Row>
        <Popup
          data={this.state.modalData.data}
          show={this.state.modalData.show}
          handleClose={() => setShow(false)}
          setModalShow={setData}
        />
        <AddPoke
          show={this.state.showNewPoke}
          handleClose={() => this.state.addPokeEvent(false)}
        />
      </Container >
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    pokemons: state.pokeReducer.pokemons,
    filteredPokemons: state.pokeReducer.filteredPokemons ? state.pokeReducer.filteredPokemons :state.pokeReducer.pokemons
  };
}

export default connect(mapStateToProps, null)(Main);

//export default Main;