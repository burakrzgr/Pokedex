import React from "react";
import { Card } from 'react-bootstrap';
import { Image } from "react-bootstrap";

function NewPokeCard({ addPokeEvent }) {
     return (
        <Card style={{ width: '17rem', backgroundColor: '#ccc', color: '#000' }} className="m-3" onClick={() => addPokeEvent()}>
            <Card.Img variant="top" as={Image} src={require('../resource/img/NewPokemon.png')} fluid={true} style={{ height: '12rem', width: '100%', objectFit: 'contain' }} />
            <Card.Body>
              { /* <Card.Title></Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                    <span className="ms-1 me-1"></span>
                </Card.Subtitle>
                <Card.Text style={{ fontSize: "15px", overflowY: 'auto', height: '10rem' }}  >
                    
                </Card.Text>
              <Button variant="outline-dark" style={{backgroundColor : '#fff2'}} >Ekle</Button>*/}
            </Card.Body>
        </Card>
     );
}

export default NewPokeCard;