import React, { useEffect } from "react";
import { connect } from "react-redux";
import {loadPoke as LoadAction} from "./actions/actions";
import { fetchAllPokemon } from "./axios/pokeserver";
import { Spinner,Stack } from "react-bootstrap";

const LoadingPanel = (props) => {
  useEffect(() => {
    setTimeout(() => {
      fetchAllPokemon().then((rs) => {
        var pokeindex = rs.data.filter((x)=>{return x.id < 99000;} ).sort((x,y) => (x.id - y.id));
        props.LoadAction(pokeindex);
        props.loaded();
      }); 
    }, 300);
  });  
  
    return (
      <Stack gap={5} className="col-md-5 mx-auto mt-5">
        <div>
          <h4>Pokemonlar Yükleniyor.</h4>
        </div>
        <div>
        </div>
        <div>
        </div>
        <div style={{height:"40rem"}}>
          <Spinner animation="border" variant="warning" size="sm" style={{height:"25rem",width:"25rem"}} />
        </div>
      </Stack>
    );
}
export default connect(
    null,
    { LoadAction }
)(LoadingPanel);