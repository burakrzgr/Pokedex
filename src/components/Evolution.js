import React from "react";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import { misc } from "../data/misc";

function Evolution(props) {
     function getData(name) {
          var list = props.pokemons.filter((x) => {return x.Name === name;});
          return list && list.length > 0 ? list[0] : misc[0];
     }
     return (
          <div>
               {props.list.length > 0 ? props.list.map(i => (
                    <Button variant="outline-dark" style={{backgroundColor : '#fff2'}} className={'me-1'} key={i} onClick={() => props.setModalShow(getData(i))} >{i}</Button>)) : <div />}
          </div>
     );
}
export default connect(
     (state) => {
          return {
               pokemons: state.pokeReducer.pokemons
          };
   }, null
 )(Evolution);
