import React from "react";
import { Button } from "react-bootstrap";
import { pokeindex } from "../data/pokemons";
import { misc } from "../data/misc";

function Evolution({ list, setModalShow }) {
     function getData(name) {
          for (var pok in pokeindex) {
               if (pokeindex[pok].Name === name) {
                    return pokeindex[pok];
               }
          }
          return misc[0];
     }
     return (
          <div>
               {list.length > 0 ? list.map(i => (
                    <Button variant="outline-dark" style={{backgroundColor : '#fff2'}} className={'me-1'} key={i} onClick={() => setModalShow(getData(i))} >{i}</Button>)) : <div />}
          </div>
     );
}

export default Evolution;
