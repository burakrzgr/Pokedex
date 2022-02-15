import React, { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { Row, Col, Button,ButtonGroup } from "react-bootstrap";
import { fetchPokemon, patchPokemon } from '../axios/pokeserver'

function Rating({ pokemon,pokeNo }) {
     const [pokeDef, setPokeDef] = React.useState({score:-1,total:0});
console.log(pokeDef);
       const rate = (ts,v) => {
          console.log("v");
          console.log(pokeNo);
          console.log(v);
        //  var aa = {ts};
          console.log(ts);
          if (v > 0) {
            patchPokemon({ "id": pokeNo, "Rating": { "Total": ts.total + 1, "Score": ts.score + 1 } });
          }
          else {
            patchPokemon({ "id": pokeNo, "Rating": { "Total": ts.total + 1, "Score": ts.score } });
          } 
         
        };

       if (pokeDef.score ===-1 && pokemon) {
          pokemon.then(function (rs) {
           if (rs) {
                let pd =rs.data && rs.data.Rating ? {score: rs.data.Rating.Score ,total: rs.data.Rating.Total}:{score:-2,total:0};
             setPokeDef( pd )
           }
           else {
             console.log('Connection Error!!');
           }
         }).catch(error => { console.log(error) });
       }

     return (
          <div>
               <Row>
                    <Col xs={2} className={"pt-2"}>
                         Rating : {pokeDef != undefined ? pokeDef.score < 0 ? ' ^-^ ' : parseFloat((pokeDef.score / pokeDef.total) * 10).toFixed(4) : 'Connection Error!'}
                    </Col>
                    <Col xs={2}>
                         <ButtonGroup variant="contained" >
                              <Button variant="contained" className={"btn-success"} onClick={(ts,v)  => rate({total:pokeDef.total,score:pokeDef.score},+1)}>
                                   <FontAwesomeIcon icon={faAngleUp}  />
                              </Button>
                              <Button  variant="outlined"  className={"btn-danger"} onClick={(ts,v)  => rate({total:pokeDef.total,score:pokeDef.score},-1)} >
                                   <FontAwesomeIcon icon={faAngleDown}  />
                              </Button>
                         </ButtonGroup>
                    </Col>
                    <Col xs={8}>
                    </Col>
               </Row>
          </div>
     );
}

export default Rating;