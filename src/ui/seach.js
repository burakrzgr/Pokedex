import React from 'react';
import { FormControl, InputGroup, Button, Container, Row, Col } from 'react-bootstrap';
import SearchIcon from '../resource/pikachu_pink_removed.png';

const Search = ({ keypres,addPokeEvent }) => {
    return (
        <Container>
            <Row>
                <Col xxl="12">
                    <InputGroup className="m-3">
                        <FormControl
                            placeholder="Pokémon'un Adını Buraya Yazın!"
                            aria-label="Pokemon Aratma Alanı"
                            aria-describedby="basic-addon2"
                            onKeyUp={keypres}
                        />
                        <Button id="button-addon2" variant="danger" onClick={addPokeEvent} >
                            <img src={SearchIcon} alt="Logo" style={{ width: "30px", height: "30px" }} />
                        </Button>
                    </InputGroup>
                </Col>
            </Row>
        </Container>
    );
}
export default Search;