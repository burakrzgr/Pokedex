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
    this.state =  {
      addPokeEvent: props.addPokeEvent,
      showNewPoke: props.showNewPoke,
      modalData : { data: { }, show:false}
    };
    this.showNewPoke = props.showNew;
    console.log("zz",this.state);
    console.log("zzc",props);
    console.log("zz1", this.showNewPoke);
  };


  shouldComponentUpdate(prevProps){
    console.log("www");
    return false;
    /*if(prevProps.showNewPoke !== this.props.showNewPoke){
        this.setState({          
          showNewPoke: this.props.showNewPoke
        });
    }*/
  };
   


  render() {
    function setShow (vis) {
      this.state.modalData.show = vis ;// = ({ ...modalData, show: vis });
    };
    function setData (data) {
      this.state.modalData = ({ data: { ...data }, show: true });
    };
{console.log("ll",this.state)}
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
          show={this.showNewPoke}
          handleClose={() => this.state.addPokeEvent(false)}
        />
      </Container >
    );
  }
}


function mapStateToProps(state) {
  console.log(state);
  return {
   // showNew : state.showNewPoke,
    pokemons: state.pokeReducer.pokemons,
    filteredPokemons: state.pokeReducer.filteredPokemons ? state.pokeReducer.filteredPokemons :state.pokeReducer.pokemons
  };
}

function mapDispatchToProps(dispatch) {
  console.log("dis",dispatch);
  return {
    showNew: false
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);

//export default Main;