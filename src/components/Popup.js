import { Modal, Container, Row, Col } from "react-bootstrap";
import React, { useReducer } from "react";
import reducer from "../reducers";
import "../button.css";
import Evolution from "./Evolution";
import PokeType from "./PokeType";
import { fetchPokemon, patchPokemon } from '../axios/pokeserver'
import Rating from "./Rating";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrashCan,faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { openNewPoke as OpenNewAction} from "../actions/actions";

function Popup(props) {

  const [pokeRating, setPokeRating] = useReducer(reducer, {
    id: props.data.id,
    total: 1,
    score: -1,
  });
  const pokeRate = (v, id) => {
    var poke = (id ? (fetchPokemon(id)) : undefined);
    poke.then((rs) => {
        var rating = rs.data && rs.data.Rating ? { id: id, score: rs.data.Rating.Score + (v > 0 ? 1 :0), total: rs.data.Rating.Total + 1} : { score: -1, total: 0 };
        patchPokemon({id:id,"Rating":{"Score":rating.score,"Total":rating.total}})
        setPokeRating({ type: "POKERATE", inf: rating });
    }) ;
  };
  const showRate = (id) => {
    var poke = (id ? (fetchPokemon(id)) : undefined);
    poke.then((rs) => {
        var rating = rs.data && rs.data.Rating ? { id: id, score: rs.data.Rating.Score , total: rs.data.Rating.Total} : { score: -1, total: 0 };
        setPokeRating({ type: "POKERATE", inf: rating });
    }) ;
  };
  const showEdit = props.data.id<99000;
  return (
    <Modal
      show={props.show}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      onHide={props.handleClose}
      backdrop="static"
      className="pokepop"
      centered
      contentClassName="my-popup-rounded"
    >
     
      {props.data ? (
        <Container style={{ backgroundColor: props.data.BColor }} fluid>
          <Row>
            <Col md="auto" className="m-1">
              {props.data.Img ? (
                <img
                  src={"/assets/img/pokemons/" + props.data.Img}
                  style={{height: "100%", width: "20rem", objectFit: "contain" }} alt="Pokemon" 
                />
              ) : (  <div></div> )}
            </Col>
            <Col>
              <Modal.Header closeButton>
                <Modal.Title
                  id="contained-modal-title-vcenter"
                  style={{ color: props.data.FColor }} 
                >
                  <div className="d-flex justify-content-between ">
                    <div >{props.data.Name} {showEdit ?(<span className="text-muted">#{props.data.id}</span>):(<></>)} </div>
                    {showEdit ?<div className="ps-4" onClick={() => {props.handleClose(); props.actions.open({showNewModal:true,newModalValue : props.data}) }}><FontAwesomeIcon icon={faEdit} /></div> : 
                    <div className="ps-4" onClick={() => {props.handleClose(); props.actions.open({showNewModal:true,newModalValue : undefined}) }}><FontAwesomeIcon icon={faCirclePlus} /></div>}
                    {showEdit ?<div className="ps-2" onClick={() => {props.handleClose(); props.actions.open({showNewModal:true,newModalValue : props.data}) }}><FontAwesomeIcon icon={faTrashCan} /></div> : <></>}
                  </div>
                </Modal.Title>
              </Modal.Header>
              <Modal.Body style={{ color: props.data.FColor }}>
                <h5>
                  <PokeType list={props.data.Type} tooltipLevel={2}></PokeType>
                </h5>
                <h6>Açıklama</h6>
                <p>{props.data.Desc}</p>
                <Rating rating={pokeRating} pokeRate={pokeRate} id={props.data.id} showRate={showRate}></Rating>
              </Modal.Body>
              <Modal.Footer className="justify-content-between">
                <Evolution list={props.data.Prev} setModalShow={props.setModalShow} />
                <div style={{ width: "30%" }}></div>
                <Evolution list={props.data.Next} setModalShow={props.setModalShow} />
              </Modal.Footer>
            </Col>
          </Row>
        </Container>
      ) : (
        <div> Aradığnız pokemon kaydedilmedi!</div>
      )}
    </Modal>
  );
}

//export default Popup;

function mapDispatchToProps(dispatch) {
  return {
      actions: {
          open: bindActionCreators(OpenNewAction, dispatch)
      },
  };
}
export default connect(null, mapDispatchToProps)(Popup);
