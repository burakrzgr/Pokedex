import React, { useEffect } from "react";
import { connect } from "react-redux";
import {loadPoke as LoadAction} from "./actions/actions";
import { fetchAllPokemon } from "./axios/pokeserver";
import { Spinner,Stack } from "react-bootstrap";
import { postImg } from './axios/imgServer'


const LoadingPanel = (props) => {
  var b64 = 
      "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"
  ;

  useEffect(() => {
    setTimeout(() => {

      fetchAllPokemon().then((rs) => {
        var pokeindex = rs.data.filter((x)=>{return x.id < 99000;} );
        props.LoadAction(pokeindex);
        props.loaded();
      }); 
    }, 300);
    
  });  
  
  {  const newLocal = postImg("test.png", { b64 });  }
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