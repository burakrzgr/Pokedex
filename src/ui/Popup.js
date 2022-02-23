import { Modal, Container, Row, Col } from "react-bootstrap";
import React, { useReducer } from "react";
import reducer from "../reducers";
import "../button.css";
import Evolution from "./Evolution";
import PokeType from "./PokeType";
import { fetchPokemon, patchPokemon } from '../axios/pokeserver'
import Rating from "./Rating";

function Popup({ data, show, handleClose, setModalShow }) {

  const [pokeRating, setPokeRating] = useReducer(reducer, {
    id: data.id,
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

  return (
    <Modal
      show={show}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      onHide={handleClose}
      backdrop="static"
      centered
    >
      {data ? (
        <Container style={{ backgroundColor: data.BColor }} fluid>
          <Row>
            <Col md="auto" className="m-1">
              {data.Img ? (
                <img
                  src={require("../resource/img/" + data.Img)}
                  style={{
                    height: "100%",
                    width: "20rem",
                    objectFit: "contain",
                  }}
                  alt="Pokemon"
                />
              ) : (
                <div></div>
              )}
            </Col>
            <Col>
              <Modal.Header closeButton>
                <Modal.Title
                  id="contained-modal-title-vcenter"
                  style={{ color: data.FColor }}
                >
                  {data.Name}
                </Modal.Title>
              </Modal.Header>
              <Modal.Body style={{ color: data.FColor }}>
                <h5>
                  <PokeType list={data.Type} ></PokeType>
                </h5>
                <h6>Açıklama</h6>
                <p>{data.Desc}</p>
                <Rating rating={pokeRating} pokeRate={pokeRate} id={data.id} showRate={showRate}></Rating>
              </Modal.Body>
              <Modal.Footer className="justify-content-between">
                <Evolution list={data.Prev} setModalShow={setModalShow} />
                <div style={{ width: "30%" }}></div>
                <Evolution list={data.Next} setModalShow={setModalShow} />
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

export default Popup;
