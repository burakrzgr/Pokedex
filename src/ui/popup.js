import { Modal, Container, Row, Col } from "react-bootstrap";
import React, { useEffect } from "react";
import '../button.css';
import Evolution from './evolution';
import PokeType from './poketype';
import { fetchPokemon, patchPokemon } from '../axios/pokeserver'
import Rating from './Rating'

function Popup({ data, show, handleClose, setModalShow }) {
  const poke = (data && data.No ? fetchPokemon(data.No) : undefined);

  var rating = {};

  if (poke) {
    poke.then(function (rs) {
      if (rs) {
        ////// reducer ile burda update yapılmalı ; yoksa update edemiyor
        rating = rs.data && rs.data.Rating ? { score: rs.data.Rating.Score, total: rs.data.Rating.Total } : { score: -1, total: 0 };
      }
      else {
        console.log('Connection Error!!');
      }
    }).catch(error => { console.log(error) });
  }
  return (
    <Modal
      show={show}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      onHide={handleClose}
      backdrop="static"
      centered
    >
      {data ?
        <Container style={{ backgroundColor: data.BColor }} fluid>
          <Row>
            <Col md="auto" className="m-1" >
              {data.Img ? <img src={require('../resource/img/' + data.Img)} style={{ height: '100%', width: '20rem', objectFit: 'contain' }} alt="Pokemon" /> : <div></div>}
            </Col>
            <Col >
              <Modal.Header closeButton >
                <Modal.Title id="contained-modal-title-vcenter" style={{ color: data.FColor }}>
                  {data.Name}
                </Modal.Title>
              </Modal.Header>
              <Modal.Body style={{ color: data.FColor }}>
                <h5>
                  <PokeType list={data.Type}></PokeType>
                </h5>
                <h6>Açıklama</h6>
                <p>
                  {data.Desc}
                </p>
                {console.log(rating)}
                <Rating rating={rating} pokeNo={data.No} ></Rating>
              </Modal.Body>
              <Modal.Footer className="justify-content-between">
                <Evolution list={data.Prev} setModalShow={setModalShow} />
                <div style={{ width: "30%" }}></div>
                <Evolution list={data.Next} setModalShow={setModalShow} />
              </Modal.Footer>
            </Col >
          </Row>
        </Container> : <div> Aradığnız pokemon kaydedilmedi!</div>}
    </Modal>
  );
}

export default Popup;