import React from "react";
import { Card, Button } from 'react-bootstrap';
import { Image } from "react-bootstrap";

const PokeCard = ({ data,setModalShow }) => {
    return (
        <Card style={{ width: '17rem', backgroundColor: data.BColor, color: data.FColor }} className="m-3">
            <Card.Img variant="top" as={Image} src={"/assets/img/pokemons/" + data.Img} fluid={true} style={{ height: '12rem', width: '100%', objectFit: 'contain' }} />
            <Card.Body>
                <Card.Title>{data.Name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                    {data.Type.map( i => (
                        <span key={i} className="ms-1 me-1">
                            {i}
                        </span>
                    ))}</Card.Subtitle>
                <Card.Text style={{ fontSize: "15px", overflowY: 'auto', height: '10rem' }}  >
                    {data.Desc}
                </Card.Text>
                <Button variant="outline-dark" style={{backgroundColor : '#fff2'}} onClick={() => setModalShow(data)} >Pokemon Detayları</Button>
            </Card.Body>
        </Card>
    );
}

export default PokeCard;
