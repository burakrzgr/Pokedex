import React, { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { Row, Col, Button, ButtonGroup } from "react-bootstrap";
function Rating({ rating, pokeRate, id,  showRate }) {

     useEffect(() => showRate(id), [id]);

     return (
          <div>
               <Row>
                    <Col xs={2} className={"pt-2"}>
                         Rating : {rating ? rating.score < 0 ? ' ^-^ ' : parseFloat((rating.score / rating.total) * 10).toFixed(2) : 'Connection Error!'}
                    </Col>
                    <Col xs={2}>
                         <ButtonGroup variant="contained" >
                              <Button variant="contained" className={"btn-success"} onClick={() => {pokeRate(+1,id)}}>
                                   <FontAwesomeIcon icon={faAngleUp} />
                              </Button>
                              <Button variant="outlined" className={"btn-danger"} onClick={() => {pokeRate(-1,id)}} >
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