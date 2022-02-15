import React from 'react';
import { FormControl, InputGroup, Button, Container } from 'react-bootstrap';
import SearchIcon from '../resource/pikachu_pink_removed.png';

const PokeSearch = ({keypres}) => {
    return (
        <Container>
            <InputGroup className="m-3">
                <FormControl
                    placeholder="Pokémon'un Adını Buraya Yazın!"
                    aria-label="Pokemon Aratma Alanı"
                    aria-describedby="basic-addon2"
                    onKeyUp={keypres}
                />
                <Button id="button-addon2" variant="danger" >
                    <img src={SearchIcon} alt="Logo" style={{ width: "30px", height: "30px" }} />
                </Button>
            </InputGroup>
        </Container>
    );
}
export default PokeSearch;