import React from "react";
import { Card,Image } from 'react-bootstrap';

function NewCard() {
     return (
        <Card style={{ width: '17rem', backgroundColor: '#ccc', color: '#000' }} className="m-3" >
            <Card.Img variant="top" as={Image} src={'img/NewPokemon.png'}  fluid={true} style={{ height: '12rem', width: '100%', objectFit: 'contain' }} />
            <Card.Body>
            </Card.Body>
        </Card>
     );
}

export default NewCard;