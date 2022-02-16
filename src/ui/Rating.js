import React, { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { Row, Col, Button, ButtonGroup } from "react-bootstrap";
import { fetchPokemon, patchPokemon } from '../axios/pokeserver'

function Rating({ rating, pokeNo }) {
    
  const [_rating, setRating] = React.useState(rating); // reducere cevrilmeli 
  console.log("lol");
  console.log(rating);
  console.log(_rating);
     const rate = (v) => {
          var ts = (pokeNo ? fetchPokemon(pokeNo) : undefined);
          ts.then(function (rs) {
               var t = {};
               if (v > 0) {
                    t = { "id": pokeNo, "Rating": { "Total": rs.data.Rating.Total + 1, "Score": rs.data.Rating.Score + 1 } }
               }
               else {
                    t = { "id": pokeNo, "Rating": { "Total": rs.data.Rating.Total + 1, "Score": rs.data.Rating.Score } };
               }
               patchPokemon(t);
               _rating = { score: t.Rating.Score, total: t.Rating.Total };
               setRating(_rating);
          });

     };

     
 //console.log(pokeNo);
     return (
          <div>
               <Row>
                    <Col xs={2} className={"pt-2"}>
                         Rating : {rating != undefined ? rating.score < 0 ? ' ^-^ ' : parseFloat((rating.score / rating.total) * 10).toFixed(2) : 'Connection Error!'}
                    </Col>
                    <Col xs={2}>
                         <ButtonGroup variant="contained" >
                              <Button variant="contained" className={"btn-success"} onClick={(v) => rate(+1)}>
                                   <FontAwesomeIcon icon={faAngleUp} />
                              </Button>
                              <Button variant="outlined" className={"btn-danger"} onClick={(v) => rate(-1)} >
                                   <FontAwesomeIcon icon={faAngleDown} />
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